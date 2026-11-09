---
title: "LNbits ― 攻撃を受け、全サーバーの停止を呼びかけ"
date: 2026-11-09
region: vuln
tags: [LNbits, 悪用確認, 未修正, 暗号資産, 不正取引, Lightning Network]
description: Bitcoin Lightningのウォレット・決済基盤LNbitsが11月8日、「一連の攻撃」を受けて全利用者にサーバーを直ちに止めるよう呼びかけ、運営するホスティングの全インスタンスも停止した。脆弱性の内容、影響する版、CVEは未公表で、2026年11月9日15時（日本時間）時点で修正版は出ていない。
---

# LNbits ― 攻撃を受け、全サーバーの停止を呼びかけ

## 要点

### 影響を受けるもの

- **LNbitsを動かしているすべてのサーバー**。LNbitsは対象の版や構成を限定せず、全利用者に停止を求めている（[LNbitsのX投稿、11月8日](https://x.com/lnbits/status/2119428804951048237)）。
- LNbitsが運営するホスティング（my.lnbits.com）の全インスタンスは、LNbits側で停止済み（[LNbitsのX投稿](https://x.com/lnbits/status/2119479738783629384)）。

### 今すぐやること

- セルフホストのLNbitsは、修正版が出るまで止めておく。
- 再開する前に、11月8日以降に作られたアカウントと出金の記録を確認する。

## 何が起きているか

**事実（LNbitsの発表）**

- 2026年11月8日21時33分（日本時間、以下同じ）、LNbitsはX上で、Paywall拡張機能を有効にしている運用者に対し、潜在的なバグを調査する間すぐに無効化するよう求めた（[LNbits](https://x.com/lnbits/status/2119408009700937798)）。
- 同日22時56分、LNbitsは「一連の攻撃（a wave of attacks）を受け、出すべきセキュリティパッチが複数ある」として、すべての利用者にLNbitsサーバーを直ちに止めるよう呼びかけた。Paywall拡張機能の有無は問わない内容だった（[LNbits](https://x.com/lnbits/status/2119428804951048237)）。
- 11月9日2時18分、LNbitsは予防措置として自社のホスティングの全インスタンスを停止し、24時間以内にサービスを再開するとした（[LNbits](https://x.com/lnbits/status/2119479738783629384)）。
- 2026年11月9日15時時点で、LNbitsのGitHubに新しいセキュリティ勧告や修正版は出ておらず、最新版は9月18日の v1.6.2 のまま（[LNbitsのリリース一覧](https://github.com/lnbits/lnbits/releases)、[セキュリティ勧告](https://github.com/lnbits/lnbits/security/advisories)）。

**事実（報道・運用者の報告）**

- 開発者のBen Arc氏は、パッチは24〜48時間以内にマージされ公開される見込みだと投稿した（[Cybersixt](https://cybersixt.com/originals/lnbits-tells-all-operators-to-shut-down-servers-after-attacks)、[Bitcoin.com News](https://news.bitcoin.com/security/lightning-network-security-scare-forces-lnbits-servers-offline/)）。
- Telegramの投げ銭ボット「BitTipBot」の運用者は、自分のLNbitsが警告の前に攻撃され、11月8日18時22分から23時ごろの間に、新しく作られたアカウントから2,285,545サトシ（約0.023 BTC）が引き出されたと報告した。利用者には自分で補填するとしている。この運用者は後に、LNbits側と悪用された拡張機能を特定したと述べたが、名前は明かしていない（Cybersixt、Bitcoin.com News）。
- 脆弱性の内容、悪用された拡張機能の名前、Paywallの不具合との関係、攻撃を受けたインスタンス数、被害総額は公表されていない。CVEも採番されていない。

## 影響を受ける製品・バージョン

| 対象 | 状況 |
| --- | --- |
| セルフホストのLNbits（全版） | LNbitsが停止を要請。影響する版は未公表 |
| Paywall拡張機能 | 最初に無効化を要請された。攻撃との関係は未公表 |
| my.lnbits.com（LNbitsのホスティング） | LNbitsが全インスタンスを停止 |

## 修正版・回避策

- 修正版：未公開（2026年11月9日15時時点）。LNbitsは「続報を出す」としている。
- 回避策：LNbitsが示しているのはサーバーの停止だけで、設定変更などの部分的な回避策は示されていない。

## 今すぐやること

1. LNbitsのサーバーを止める。止められない事情があっても、少なくともインターネットから届かない状態にする。
2. 停止前の記録を保全し、11月8日以降に作られたユーザーアカウントと、それらからの出金・送金を確認する。
3. 修正版が出たら更新したうえで、LNbitsが読めた接続先ノードの管理用認証情報（マカロンなど）やAPIキーの交換を検討する（筆者の提案）。
4. LNbitsのX・GitHubの続報を確認し、公表される影響範囲や痕跡情報に合わせて調査をやり直す。

## 考察

- **「全部止めて」は異例の判断**: 対象の版も拡張機能も絞らずに全サーバーの停止を求めたのは、悪用の経路をまだ切り分けきれていないか、修正前に経路を明かすと攻撃が広がると判断したからだと考える。詳細が出るまでは「自分の構成は関係ない」と判断する材料がない。
- **お金に直結する**: LNbitsは接続先のLightningノードの資金を複数の利用者に配る仕組みなので、不具合はそのまま資金の流出につながる。報告された手口が「新しく作ったアカウントからの出金」である点からは、アカウント作成と残高・出金の処理のどこかで検証が欠けていた可能性があるが、これは公表された事実ではない。
- **拡張機能の審査が論点になりうる**: 9月のv1.6.0では、拡張機能を隔離して動かすWASM拡張が導入されていた。今回悪用されたのが従来型の拡張機能だったのかどうかは、続報で確認したい。

## 出典

- [LNbits: Paywall拡張機能の無効化を求める投稿（2026年11月8日）](https://x.com/lnbits/status/2119408009700937798)
- [LNbits: 全サーバーの停止を求める投稿（2026年11月8日）](https://x.com/lnbits/status/2119428804951048237)
- [LNbits: ホスティングの全インスタンス停止の投稿（2026年11月9日）](https://x.com/lnbits/status/2119479738783629384)
- [LNbits GitHub リリース一覧](https://github.com/lnbits/lnbits/releases)
- [Cybersixt: LNbits tells all operators to shut down servers after attacks](https://cybersixt.com/originals/lnbits-tells-all-operators-to-shut-down-servers-after-attacks)
- [Bitcoin.com News: Lightning Network Security Scare Forces LNbits Servers Offline](https://news.bitcoin.com/security/lightning-network-security-scare-forces-lnbits-servers-offline/)
