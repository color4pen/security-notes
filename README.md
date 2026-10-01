# security-notes

セキュリティニュースを「何が問題だったのか（根本原因）」「どう侵入されたのか（侵入経路）」「運用者は何をすべきか（対策と検知）」の観点で読み解き、考察するノートです。

各記事では、ベンダーのアドバイザリ・公的機関の注意喚起・研究者の分析・報道で確認できた内容を「事実」、筆者の推測や意見を「考察」として分けて書いています。確認できなかった情報は書いていません。

## 記事一覧（新しい順）

- 2026-10-01 [Bitget 3億8750万ドル流出 ― 守るはずのセキュリティ製品がウォレットへの踏み台になった](posts/2026-10-01-bitget-387m-heist-security-appliance-zero-day.md)
- 2026-10-01 [Zimbra CVE-2026-73570 ― 1通のSMTPがSNMP通知を経てシェルになる、パッチから公表までの「隙間」の悪用](posts/2026-10-01-zimbra-snmp-cve-2026-73570.md)
- 2026-10-01 [Citrix NetScaler ADC/Gateway CVE-2026-88772/88771 悪用 ― DTLSの断片長を信じたパケットエンジンと、パッチ後に残る足場](posts/2026-10-01-citrix-netscaler-cve-2026-88772-88771.md)
- 2026-10-01 [Cisco Catalyst SD-WAN Manager 認証回避ゼロデイ CVE-2026-76504 ― 1文字のURIエンコードが管理者APIを開けた](posts/2026-10-01-cisco-sdwan-manager-cve-2026-76504.md)

## 記事の構成

1. 概要（3行）
2. 何が起きたか（時系列）
3. 技術的な問題点（根本原因）
4. 攻撃・侵入経路
5. なぜ防げなかったか・構造的要因の考察
6. 運用者向けの具体的な対策と検知ポイント
7. 参考リンク

## Webサイトのローカルプレビュー

Astroで記事一覧と記事詳細を生成します。記事本文は `posts/` のMarkdownをそのまま使用します。

```sh
npm ci
npm run dev
```

表示先: `http://localhost:4321/security-notes/`

- `npm run check`: Astro / TypeScriptのチェック
- `npm run build`: 静的サイトを `dist/` に生成
- `npm run preview`: ビルドしたサイトを確認

記事の `title`、`date`、`tags` を一覧・記事ヘッダーに使用します。任意の `description` と `updated` も指定できます。説明がない記事では冒頭の箇条書きを一覧の要約に使います。検索はタイトル・タグ・要約を対象にします。

デザインは生成り色の紙面と墨色を基調に、明朝体の見出しと細い罫線を使った新聞風です。本文と操作部分は読みやすいゴシック体にしています。トップはヒーローを設けず、新着記事・検索・タグ絞り込みをすぐ使える構成です。記事ページは自動目次、事実・考察のラベル、横スクロール対応の表とMermaid図を備えています。

RSSフィードは `/security-notes/rss.xml` に生成されます。

公開先: https://color4pen.github.io/security-notes/

`main` にプッシュすると、GitHub Actionsがチェック・ビルドを実行し、成功したサイトをGitHub Pagesへ公開します。手動実行はActionsの「Deploy GitHub Pages」から行えます。`site` と `base` は `astro.config.mjs`、公開処理は `.github/workflows/pages.yml` に設定しています。ローカル開発にはNode.js 24を推奨します。
