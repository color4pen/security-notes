---
title: "tensorlake npm 0.5.144 ― 正規リポジトリのmainから出たShai-Huludワーム、トークンを取り消すとホームを消す人質機構"
date: 2026-10-09
region: overseas
tags: [サプライチェーン, npm, Shai-Hulud, AIエージェント, 認証情報]
description: AIエージェント基盤のnpm SDK「tensorlake」の0.5.144が、メンテナ名義でmainに直接押し込まれた後、正規のリリースフローとprovenance付きで公開された。preinstallで認証情報を奪い、奪ったGitHubトークンを取り消すとホームディレクトリを消す「人質」監視を仕込む。
---

# tensorlake npm 0.5.144 ― 正規リポジトリのmainから出たShai-Huludワーム、トークンを取り消すとホームを消す人質機構

## 要点

### 影響バージョン

- npmパッケージ `tensorlake` の **0.5.144** が悪意ある版。週次ダウンロード約1.2万、GitHubスター1000超のSDK（Socket、The Hacker News）。
- GitHubリポジトリ `tensorlakeai/tensorlake` のmain上、コミット e90c47b から 6386121 付近にも同系統のペイロードが載っていた（StepSecurity）。
- 0.5.144 は分析当時もダウンロード可能だったが、The Hacker News時点ではnpmレジストリから取得できなくなっている（Socket、The Hacker News）。一時的には `0.5.143` にピン留めする（StepSecurity）。

### 今すぐやること

- lockfile・`npm ls tensorlake`・ビルドログで 0.5.144 の有無を確認する。入っていたホストは侵害済みとして扱う（Socket、StepSecurity）。
- **先に** `gh-token-monitor` の常駐を止めてから、奪われた可能性のあるGitHub／npm／クラウド／SSH等の認証情報をローテーションする。監視が残ったままトークンを取り消すと、ホームディレクトリ削除が走る（Socket、StepSecurity）。
- 自分のGitHubに説明文「Shai-Hulud: Here We Go Again」の公開リポジトリ、作者 `claude@users.noreply.github.com` の想定外コミット、`.claude`／`.vscode` の想定外ファイルがないか確認する（StepSecurity、The Hacker News）。

## 概要

- 2026年10月8日 01:12 UTC頃、AIエージェント用サンドボックスを扱うTypeScript SDK `tensorlake` の 0.5.144 がnpmに公開された。Socketは約11分後に検知した。
- パッケージは `preinstall` で `lib/setup.mjs` を動かし、Bun経由で難読化したワーム `Math_Symbol.js` を起動する。認証情報の窃取、永続化、遠隔コード実行、他パッケージへの自己増殖が含まれる。
- 特異な点は二点ある。（1）悪意あるファイルがメンテナ名義で正規リポジトリのmainに直接入り、そのリポジトリのリリースフローとnpm provenance付きで出たこと。（2）奪ったGitHubトークンを監視し、取り消されるとホームを消す「人質トークン」機構があること。

> この記事では、ベンダー・公的機関・研究者・報道で確認できた内容を「事実」、筆者の推測や意見を「考察」として分けて書いています。

## 何が起きたか（時系列）

| 日付 | 出来事 |
| --- | --- |
| 2026-08頃 | ChainDrop／Shai-Huludとして、keyv・cacheableなど数百のnpmパッケージが同様のBunベースのワームで侵害されたと報じられる（Socket、The Hacker News） |
| 2026-10-07 01:20 UTC | `tensorlakeai/tensorlake` のmainに、メンテナ名義で最初の悪意あるコミット。その後数時間で7件追記し、`package.json` にpreinstallを追加。いずれもPRを経ていない（StepSecurity） |
| 2026-10-08 01:12 UTC | 同リポジトリのリリースワークフローが 0.5.144 をnpmへ公開。ファイルはmain上のものと同一（StepSecurity、Socket） |
| 2026-10-08 01:23 UTC頃 | Socketが検知（Socket） |
| 2026-10-08 | StepSecurityがメンテナへ報告（Issue #1014）。Socket・StepSecurity・OX Security・The Hacker Newsが分析を公開 |

## 技術的な問題点（根本原因）

**事実（Socket、StepSecurity）**

- 公開された `package.json` に `"preinstall": "node lib/setup.mjs"` がある。依存関係のライフサイクルスクリプトが許可されていれば、SDKをimportしなくてもインストールだけでローダーが動く。
- Socketがフラグしたファイル：
  - `lib/setup.mjs`（SHA-256: `25a0735d0db7dc40e5d45ce42d9c106067e6a66e184d967cfecfab17c3bcb5ef`）— Bunで本体を起動する難読化ローダー
  - `lib/Math_Symbol.js`（SHA-256: `b50a00900399ba99fb6ce1fc151519cb99d44320ef2a631f2237e1aea0ad6fec`）— 認証情報窃取と自己増殖のワーム本体
- StepSecurityによれば、ローダーはCIでは自分自身をスキップし、開発者マシンを狙う。Bunランタイムを取得して約856KBの難読化ペイロードを実行する。
- 窃取対象には、npmトークン、GitHubトークン、AWS（IMDS／ECS／Secrets Manager／SSM）、Vault（localhost:8200）、Kubernetes、SSH、`.env`、暗号資産ウォレット、メッセージングアプリのデータ、Claude／Cursor／Kiro／Windsurf／ZedなどのAI開発ツール設定・MCPファイルが含まれる（Socket、The Hacker News）。
- C2の域名はハードコードせず、Ethereumコントラクトと約30の公開RPCで解決し、GitHubをフォールバックにする。窃取データは被害者アカウント上に作る公開リポジトリ（説明文「Shai-Hulud: Here We Go Again」）または `iseekaigogo.com` へ送る（Socket、StepSecurity、The Hacker News）。
- 増殖：奪ったnpmトークンで被害者のパッケージを再公開し、Sigstore provenanceも付与する。奪ったGitHubトークンで、偽の作者 `claude@users.noreply.github.com`・メッセージ「chore: update dependencies」で `.claude`／`.vscode` 配下のファイルをコミットし、Claude CodeやVS Codeを開いたときに再実行させる（Socket、StepSecurity）。
- 「人質トークン」：GitHubトークンがあると `gh-token-monitor` を仕込む。最大24時間、60秒ごとに `api.github.com/user` でトークンの有効性を確認し、無効化されると Linuxでは `rm -rf ~/`、Windowsではユーザープロファイル削除相当を実行する。コード内に `IfYouRevokeThisTokenItWillWipeTheComputerOfTheOwner` という文字列があり、過去のShai-Hulud波でも見られた手法（Socket、StepSecurity、The Hacker News）。

**考察**

npmのprovenanceは「どのリポジトリのどのワークフローからビルドされたか」を示す。今回は本物のメンテナリポジトリと本物のリリースフローから出ているため、provenanceは真実のまま役に立たない。信頼の境界は「署名や証明があるか」ではなく、「そのmainに誰が何を直接pushできるか」「ライフサイクルスクリプトを実行してよいか」に戻る。AIエージェント用サンドボックス製品のSDKが、サンドボックスに入る前のホスト（開発者PC・ビルドランナー）で動く、という位置づけも、侵害時の権限が広い理由になっている。

## 攻撃・侵入経路

```mermaid
flowchart TD
    A[メンテナ名義でmainへ直接push<br/>PRなし] --> B[正規リリースWFが<br/>tensorlake@0.5.144を公開<br/>provenance付き]
    B --> C[開発者がnpm install<br/>preinstallがsetup.mjsを実行]
    C --> D[BunでMath_Symbol.jsを起動<br/>CIではスキップ]
    D --> E[認証情報・AIツール設定を窃取]
    E --> F[GitHub公開repo / iseekaigogo.comへ送出]
    E --> G[npmトークンで他パッケージを再公開]
    E --> H[GitHubトークンで.claude/.vscodeを埋め込み]
    E --> I[gh-token-monitorを常駐]
    I -->|トークン取り消し| J[ホームディレクトリ削除]
```

**事実（StepSecurity）**

- 復旧の順序を誤るとデータ損失につながる。監視を止める前にGitHubトークンを取り消してはならない、と明示されている。

## なぜ防げなかったか・構造的要因の考察

ここからは筆者の考察である。

1. **「正規ビルド＝安全」への過信**: provenanceやメンテナ署名は、侵害されたアカウント・侵害されたmainからは守れない。ポリシーがprovenanceを信頼する設定だと、むしろ通してしまう、とStepSecurityも指摘している。
2. **インストール時スクリプトがデフォルトで動く世界**: `preinstall` 一発で、利用者がコードを読まなくても侵害が完了する。`ignore-scripts=true` は摩擦が大きいが、今回のようなワームには直接効く。
3. **復旧の常識が罠になる**: 「まずトークンを取り消せ」は通常正しいが、人質機構がある場合は逆効果になる。攻撃側は運用者の手順書を読んだうえで設計している。
4. **AI開発ツールが新しい秘匿情報の置き場**: Claude／Cursorなどの設定とMCP設定まで集めている。サンドボックス製品を使うチームほど、エージェント用の鍵やプロンプト設定が開発者マシンに溜まりやすい。

## 運用者向けの具体的な対策と検知ポイント

**対策（Socket、StepSecurityの手順を要約）**

1. `npm ls tensorlake` とlockfileで 0.5.144 を探す。`tensorlakeai/tensorlake` のmainを10/7以降にcloneして `typescript/` で `npm install` していないかも確認する。
2. `tensorlake@0.5.143` へピン留めし、`node_modules` 削除とキャッシュ清掃。可能なら `.npmrc` で `ignore-scripts=true`。
3. 影響ホストで `~/.config/gh-token-monitor/` の有無を確認し、ある場合は中のトークンファイルを控えたうえでサービスを止める。
   - Linux: `systemctl --user disable --now gh-token-monitor.service` のあと、関連ファイルを削除
   - macOS: LaunchAgentsの `com.user.gh-token-monitor.plist` をunloadして削除
   - Windows: ログオン時に `monitor.ps1` を動かすタスクを削除
4. その後に認証情報をローテーション（GitHub、npm、クラウド、SSH、K8s、Vault、`.env`、ブラウザ保存、AIツール鍵）。
5. 確信が持てなければマシンを再インストールする。依存関係を消しただけでは常駐は残る。

**検知ポイント**

- パッケージ版とファイルハッシュ（上記SHA-256）
- ドメイン `iseekaigogo.com`
- GitHubリポジトリ説明文「Shai-Hulud: Here We Go Again」
- コミット作者 `claude@users.noreply.github.com`
- ディスク上の `~/.config/gh-token-monitor/`、`~/.local/bin/gh-token-monitor.sh`
- 想定外の `.claude/settings.json`、`.vscode/tasks.json`、`setup.mjs`、`Math_Symbol.js`

## 参考リンク

- Socket: [TensorLake npm SDK Compromised in ChainDrop Shai-Hulud Credential-Stealing Attack](https://socket.dev/blog/tensorlake-compromise)
- StepSecurity: [Tensorlake npm Package Compromised: A Worm With a Hostage Token That Wipes Your Machine If You Revoke It](https://www.stepsecurity.io/blog/tensorlake-npm-compromised-hostage-token-worm)
- The Hacker News: [Tensorlake npm Package Compromised to Deliver Shai-Hulud Credential-Stealing Worm](https://thehackernews.com/2026/10/tensorlake-npm-package-compromised-to.html)
- OX Security: [“Shai-Hulud: Here We Go Again” - “tensorlake” npm Package Hit With Malware](https://www.ox.security/blog/shai-hulud-here-we-go-again-tensorlake-npm-package-hit-with-malware/)
