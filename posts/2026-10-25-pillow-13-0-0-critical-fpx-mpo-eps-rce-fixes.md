---
title: "Pillow 13.0.0 ― 画像を開くだけでコード実行に至る欠陥をまとめて修正、12.3.0以前は全面的に影響（CVSS 9.2〜9.8）"
date: 2026-10-25
region: vuln
tags: [Pillow, Python, 画像処理, RCE, サプライチェーン]
description: Pythonの画像ライブラリPillowは2026年10月16日（UTC）に13.0.0を公開し、40件の脆弱性を修正した。細工したFlashPix（FPX）ファイルやMPO画像を開くだけでコード実行に至るもの（CVE-2026-112398、CVE-2026-96639）や、ファイル名経由のGhostscript引数注入（CVE-2026-112900）が含まれる。12.x系への修正の提供はなく、13.0.0はPython 3.11以上が必要。悪用の報告はない。
---

# Pillow 13.0.0 ― 画像を開くだけでコード実行に至る欠陥をまとめて修正、12.3.0以前は全面的に影響（CVSS 9.2〜9.8）

## 要点

### 影響バージョン

- Pillow 12.3.0 以前（脆弱性ごとに下限は異なる）。修正版は 13.0.0。
- 13.0.0 は Python 3.11 以上が必要（PyPIの `requires_python` が `>=3.11`）。Python 3.10 で動かしている環境は、Pythonごと上げる必要がある。

### 今すぐやること

- `pip install -U "Pillow>=13.0.0"` で更新し、Pillowを同梱したコンテナイメージやwheel、Lambdaレイヤーなども作り直す。
- アップロード画像などの信頼できない入力を開く処理では、`Image.open()` の `formats` 引数で必要な形式だけに絞る。

## 何が起きているか

**事実（Pillowのセキュリティ勧告、PyPI、CVEレコード）**

- Pillowは2026年10月16日（UTC、日本時間17日）に13.0.0をPyPIで公開し、翌17日以降、GitHubでセキュリティ勧告を順次公開した。13.0.0で修正されたものは40件ある（10月25日時点の勧告一覧で数えた）。12.3.0（7月1日公開）以前が対象で、12.x系の修正版は出ていない。
- 主なものは次のとおり。

| CVE | 勧告の深刻度 | CVEレコードのCVSS | 内容 | 対象 |
| --- | --- | --- | --- | --- |
| CVE-2026-112398 | Critical | 4.0で9.2 | FlashPix（FPX）のJPEGタイル復号でヒープバッファオーバーフロー。細工したファイルを `Image.open()` で開くだけでコード実行（報告者がPoCで実証）。オプションの `olefile` が入っている環境で到達する | 12.3.0 以前 |
| CVE-2026-96639 | Critical | 3.1で9.8 | MPO・PSD・DCX・MICなど複数フレーム形式で、前のフレーム用のメモリ領域を、より大きい色形式の次フレームの復号に使い回す。MPO／JPEGの経路ではコマンド実行を実証したと報告者が書いている | 11.0.0〜12.3.0 |
| CVE-2026-112900 | Moderate | 4.0で9.2 | EPS画像をGhostscriptで描画する際、ファイル名をそのままコマンド引数に渡す。`-` や `@` で始まるファイル名がオプションとして解釈され、RCEにつながりうる。既定の `-dSAFER` では防げない | 2.6.0〜12.3.0 |
| CVE-2026-112403 | High | 4.0で9.2 | ロスレス（SOF3）JPEGのサムネイル作成時のヒープバッファオーバーフロー（報告はクラッシュまで） | 12.3.0 以前 |
| CVE-2026-112393 | High | 4.0で9.2 | TIFFを `io.BytesIO` などメモリ上に保存するときのヒープバッファオーバーフロー（報告はクラッシュまで、ファイルへの保存は影響なし） | 12.3.0 以前 |

- このほか、TIFF復号での境界外読み取り・初期化されていないメモリの露出、JPEGコメント書き込み時のヒープオーバーフロー、同梱のlibopenjp2由来のヒープオーバーフロー、各種のDoS（無限ループ、計算量の爆発）などが13.0.0で直っている。
- CVE-2026-112403は、Anthropic社がClaudeを使ってオープンソースの安全性を調べる取り組みで見つけ、Ada Logicsが手作業で検証したと勧告に書かれている。
- CVEレコードのCISAの付記では、CVE-2026-112900は「悪用なし」、CVE-2026-112398は「PoCあり」。CISA KEVへの追加や、悪用の報告はない（2026年10月25日時点）。
- 13.0.0公開後に報告されたArrow出力でのメモリ漏えい（CVE-2026-114501、Moderate）は、13.0.0も影響範囲に含まれ、修正版はまだない。`PILLOW_ALIGNMENT` を1より大きくした場合に限られる。

## 影響を受ける製品・バージョン

- Pillow 12.3.0 以前。脆弱性ごとの下限は上の表のとおりで、古い版ほど多くの欠陥を抱える。
- 直接 `pip install` したものだけでなく、依存として入っているものも対象になる。Webアプリの画像アップロード、サムネイル生成、PDF・文書処理、機械学習の前処理など、画像を扱うPythonのソフトウェアの多くがPillowを使っている。
- 条件の整理：
  - FPX（CVE-2026-112398）は `olefile` が入っていると、拡張子に関係なくファイルの中身で形式が判定されるため、どんなアップロードからでも届きうる。
  - EPS（CVE-2026-112900）はGhostscript（`gs`）が入っていて、攻撃者がファイル名を左右できる場合。
  - MPO（CVE-2026-96639）は、複数フレームを `ImageSequence.Iterator` などで順に読み込む処理。

## 修正版・回避策

- 修正版は Pillow 13.0.0。12.x系への修正の提供はない。
- 13.0.0 は Python 3.10 をサポートしない。Python 3.10 の環境は、Python 3.11 以上への移行が先に必要になる。
- すぐ更新できない場合に、影響を減らす手段（考察を含む）：
  - `Image.open(fp, formats=["PNG", "JPEG"])` のように、受け付ける形式を限定する（Pillowの公式APIの機能）。ただし、CVE-2026-112403のように正規のJPEGで起きるものはこれでは防げない（勧告に明記）。
  - 不要なら `olefile` とGhostscriptを画像処理の環境から外す（FPX・EPSの経路が閉じる）。
  - 保存時のファイル名を、利用者の入力から作らずサーバー側で決める（EPSの経路）。

## 今すぐやること

1. `pip show Pillow` や `pip list`、ロックファイル（`requirements.txt`、`poetry.lock`、`uv.lock` など）で、使っているPillowの版を確認する。依存の依存として入っていることが多いので、`pip-audit` などで一括で洗い出す（考察）。
2. 13.0.0 へ更新する。Python 3.10 の環境は、ここでPythonの更新も計画する。
3. Dockerイメージ、サーバーレス関数のレイヤー、社内配布のwheelなど、Pillowを固めて同梱している成果物を作り直す。
4. 信頼できない画像を扱う処理は、`formats` 引数で形式を絞り、権限の低い別プロセスやコンテナで動かす（考察）。

## 考察

- **「開くだけ」が一番怖い**: 画像処理の脆弱性は「細工した画像を利用者に開かせる」型が多いが、Pillowは主にサーバー側で使われる。アップロードされた画像のサムネイルを自動で作る処理は、攻撃者が送ったファイルを人の操作なしで開く。CVE-2026-112398とCVE-2026-96639はまさにこの経路で、悪用の報告がない今のうちに更新を終えたい。
- **CVSSと開発元の評価のずれ**: EPSの件（CVE-2026-112900）は、CVEレコードの9.2に対し、開発元は「ファイル名を攻撃者が制御する必要がある」としてModerateと評価している。条件が合わない環境では緊急度は下がるが、同じ13.0.0にCriticalが2件含まれる以上、結論は「13.0.0へ上げる」で変わらない。
- **Python 3.10切り捨ての重み**: 修正がメジャーバージョンアップにしか入っていないため、古いPythonで動く社内ツールや、ベンダー製品に組み込まれたPillowは取り残されやすい。ベンダー製品については、各社の対応表明を待つことになる。
- **AIによる発見の波**: 今回の報告にはAIを使った調査によるものが複数含まれる。広く使われるCやC++のライブラリに、同じように欠陥がまとめて見つかる流れは続くとみられ、依存ライブラリの更新を定期作業にしておく価値が上がっている。

## 出典

- [Pillow 13.0.0（PyPI）](https://pypi.org/project/pillow/13.0.0/)
- [Pillowのセキュリティ勧告一覧（GitHub）](https://github.com/python-pillow/Pillow/security/advisories)
- [GHSA-5x8w-8jj5-q52h: FlashPix（FPX）JPEG復号のヒープバッファオーバーフロー（CVE-2026-112398）](https://github.com/python-pillow/Pillow/security/advisories/GHSA-5x8w-8jj5-q52h)
- [GHSA-v9pv-5gc8-w2m6: 複数フレーム形式での古いメモリ領域の再利用（CVE-2026-96639）](https://github.com/python-pillow/Pillow/security/advisories/GHSA-v9pv-5gc8-w2m6)
- [GHSA-w889-685w-c8fh: Ghostscript呼び出しの引数注入（CVE-2026-112900）](https://github.com/python-pillow/Pillow/security/advisories/GHSA-w889-685w-c8fh)
- [GHSA-8g5g-8vmr-9782: ロスレスJPEGのヒープバッファオーバーフロー（CVE-2026-112403）](https://github.com/python-pillow/Pillow/security/advisories/GHSA-8g5g-8vmr-9782)
- [GHSA-332p-7hrc-92wf: TIFFをメモリ上に保存する際のヒープバッファオーバーフロー（CVE-2026-112393）](https://github.com/python-pillow/Pillow/security/advisories/GHSA-332p-7hrc-92wf)
- [CVE-2026-96639（NVD）](https://nvd.nist.gov/vuln/detail/CVE-2026-96639)
- [CVE-2026-112398（NVD）](https://nvd.nist.gov/vuln/detail/CVE-2026-112398)
- [Critical Flaw in Python's Popular Pillow Image Library Allows Code Execution via a Crafted Image（The Hacker News、2026-10-23）](https://thehackernews.com/2026/10/critical-flaw-in-pythons-popular-pillow.html)
