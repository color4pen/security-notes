# タイトルとタグの付け方

記事の `title`・`description`・`tags` の書き方です。一覧・検索・タグページ（`/security-notes/tags/`）・RSSはこれを元に作られます。

## タイトル

- 形は「主語 ― 何が起きたか」。主語は組織名・製品名・脅威名（CVE番号を添えてよい）。
- 40字前後まで（全角1字、半角英数字は0.5字で数える）。一覧で1〜2行に収まる長さ。
- 何が起きたかを一言で書く。件数・被害範囲・金額・攻撃の細部・CVSSはタイトルに入れず `description` に書く。
- 推測や評価（「〜が原因か」「深刻」など）はタイトルに入れない。発表された事実だけで書く。
- 本文の `# 見出し` は `title` と同じにする。続報で事実が変わったら、タイトルも「何が起きたか」に合わせて直してよい（ファイル名は変えない）。

例：

| 長すぎる | 直したタイトル |
| --- | --- |
| Bitget 3億8750万ドル流出 ― 守るはずのセキュリティ製品がウォレットへの踏み台になった | Bitget ― セキュリティ製品を踏み台にウォレットから資金流出 |
| セイコーマートアプリ ― 会員57万4647人分が閲覧された不正アクセス（原因は非公表） | セイコーマートアプリ ― 不正アクセスで会員情報が閲覧された |

## description

- 一覧ではタイトルの下に表示され、RSSの要約にもなる。1〜2文。
- タイトルから外した件数・被害範囲・手口・CVSS・影響バージョンをここに書く。事実だけを書き、出典で確認できないことは書かない。

## タグ

`tags` は配列で、1つ目が一覧で目立たせるラベルになります。

1. 1つ目は記事の主語（組織名・製品名・脅威名）か、それが無ければ代表的な分類タグ。
2. 下の分類タグを最低1つ付ける。目安は「インシデント種別」1つ以上＋該当する「攻撃手法」「対象技術」。
3. 一般的な言葉は下の表の表記（メンバーに載っている語）を使う。新しい言い方を作らない。
4. 固有名詞（組織・製品・脅威グループ）とCVE番号は自由に付けてよい。全記事のキーワード検索にリンクされる。
5. 合計は3〜8個程度。

### 分類

分類タグは、表の「タグとして書く語」のどれかが記事の `tags` にあれば付きます（`src/data/taxonomy.json`）。分類タグのページは `/security-notes/tags/<slug>/` です。


#### 攻撃手法（どうやって入られたか・何が使われたか）

| 分類タグ | slug | タグとして書く語 |
| --- | --- | --- |
| ゼロデイ | `zero-day` | ゼロデイ、ゼロクリック |
| 脆弱性悪用 | `vuln-exploit` | 脆弱性、既知の脆弱性、PoC、未修正 |
| 認証回避 | `auth-bypass` | 認証回避、認証欠落 |
| 認可不備 | `broken-access-control` | 認可不備、権限の誤付与、権限管理、設計上の欠陥 |
| RCE | `rce` | RCE |
| インジェクション | `injection` | コマンドインジェクション、SQLインジェクション、テンプレートインジェクション |
| XSS | `xss` | XSS、蓄積型XSS |
| パストラバーサル | `path-traversal` | パストラバーサル、ファイルアップロード |
| SSRF | `ssrf` | SSRF |
| メモリ破壊 | `memory-corruption` | メモリ破壊、整数オーバーフロー、ヒープオーバーフロー、UAF |
| 権限昇格 | `privilege-escalation` | 権限昇格、VMエスケープ、サンドボックス回避 |
| 認証情報の悪用 | `credential-abuse` | 認証情報、APIキー、アクセストークン、AIキー、パスワード、秘密情報管理 |
| フィッシング | `phishing` | フィッシング、AitM、なりすましメール、ビジネスメール詐欺、なりすまし、ClickFix |
| Webシェル | `webshell` | Webシェル |
| マルウェア | `malware` | マルウェア、バックドア、スパイウェア、ブートキット、ワイパー、メモリ常駐型マルウェア、情報窃取、クリプトマイニング、ボットネット、インプラント、プロキシウェア、BYOVD |
| ランサムウェア | `ransomware` | ランサムウェア、二重恐喝、リークサイト |
| サプライチェーン | `supply-chain` | サプライチェーン、アップデート改ざん、Shai-Hulud、GlassWorm |
| 設定不備 | `misconfiguration` | 設定不備、ハードコード秘密、非本番環境 |
| Webスキミング | `web-skimming` | Webスキミング |
| プロンプトインジェクション | `prompt-injection` | プロンプトインジェクション |
| 標的型攻撃 | `targeted-attack` | 標的型攻撃、APT |
| ドメイン悪用 | `domain-abuse` | DNSハイジャック、ホモグラフ、タイポスクワッティング、ドメイン失効 |

#### 対象技術（どの製品・仕組みが狙われたか）

| 分類タグ | slug | タグとして書く語 |
| --- | --- | --- |
| ネットワーク機器 | `network-device` | ネットワーク機器、VPN、ファイアウォール、ルーター、SD-WAN、無線LAN、Wi-Fi、エッジデバイス、セキュリティアプライアンス、リモートアクセス、NetScaler、SonicWall、Ivanti、Palo Alto Networks、NX-OS、VeloCloud、HPE Aruba、WAF |
| ECサイト | `ec` | ECサイト、Magento、Adobe Commerce、EC-CUBE |
| CMS | `cms` | CMS、WordPress、Drupal、プラグイン、Rank Math、UpdraftPlus |
| スマホアプリ | `mobile-app` | スマホアプリ、iOS、モバイル |
| API | `api` | API、API悪用 |
| クラウド・SaaS | `cloud` | クラウド、SaaS、PaaS、クラウドストレージ、Microsoft 365、Google Workspace、VPS |
| ID・認証基盤 | `identity` | SAML、OIDC、Entra ID、Active Directory、LDAP、JWT、共通ID、OAuthアプリ、NTLM |
| メール | `email` | メールサーバー、メール配信、Microsoft Exchange、Zimbra、FortiMail、メールセキュリティ、メールアカウント |
| 開発基盤・CI/CD | `devops` | CI/CD、GitHub Actions、GitHub、GitLab、Docker Hub、開発者狙い |
| パッケージ配布 | `package-registry` | npm、PyPI |
| AI | `ai` | AI、AIエージェント、生成AI、シャドーAI、AI Gateway、Codex、Claude Code |
| OS・カーネル | `os` | Linux、Windows、カーネル、OpenBSD、Secure Boot、UEFI |
| 仮想化 | `virtualization` | 仮想化、VMエスケープ、Kubernetes |
| リモート管理ツール | `remote-management` | リモートサポート、リモートデスクトップ、リモート管理、AnyDesk、BeyondTrust、MSP |
| IoT・制御システム | `iot-ics` | IoT、制御システム、重要インフラ、DVR、防犯カメラ |
| ブラウザ | `browser` | Chrome |
| 決済 | `payment` | クレジットカード、後払い決済、決済代行、プリペイド、口座情報、銀行口座、eギフト、デジタルギフト、ポイント |
| 暗号資産 | `crypto-asset` | 暗号資産、ハードウェアウォレット、XRP Ledger |
| バックアップ・ファイル共有 | `backup-file` | バックアップ、ファイルサーバー、クラウドストレージ、AhsayCBS |
| 管理画面 | `admin-console` | 管理画面、管理ツール、管理機能、管理インターフェース、管理基盤、管理アカウント |
| 証明書・PKI | `pki` | 証明書、PKI、認証局、Certificate Transparency |

#### インシデント種別（何が起きたか）

| 分類タグ | slug | タグとして書く語 |
| --- | --- | --- |
| 不正アクセス | `unauthorized-access` | 不正アクセス、再侵入 |
| 個人情報漏えい | `personal-data-leak` | 個人情報漏えい、本人確認書類、履歴書、要配慮個人情報、パスワードハッシュ |
| 情報漏えい | `data-leak` | 情報漏えい、取引先情報、人事情報 |
| サービス停止 | `service-outage` | サービス停止、DoS |
| 委託先経由 | `third-party` | 委託先、海外子会社 |
| 金銭被害・不正利用 | `financial-fraud` | 不正取引、ポイント不正交換、不正発行、アカウント不正利用、特別損失 |
| アカウント乗っ取り | `account-takeover` | アカウント乗っ取り |
| 内部不正・ルール違反 | `insider` | ルール違反 |
| 悪用確認 | `exploited` | 悪用確認、KEV |
| 注意喚起 | `advisory` | 注意喚起 |

### 表記の統一（別名）

次の語は同じ意味の重複なので、書かずに右の表記を使ってください。`src/data/taxonomy.json` の `aliases` にも登録してあり、サイト上では右の表記として扱われます。

| 使わない表記 | 使う表記 |
| --- | --- |
| 個人情報 | 個人情報漏えい |
| 個人情報流出 | 個人情報漏えい |
| 情報流出 | 情報漏えい |
| リモートコード実行 | RCE |
| 認証なしRCE | RCE |
| 認証前RCE | RCE |
| CISA-KEV | KEV |
| サプライチェーン攻撃 | サプライチェーン |
| メールサーバ | メールサーバー |
| 委託先・取引先 | 委託先 |
| EC | ECサイト |
| 会員アプリ | スマホアプリ |
| アプリ | スマホアプリ |
| クラウドサービス | クラウド |
| 仮想化基盤 | 仮想化 |
| 暗号通貨マイナー | クリプトマイニング |
| Webサービス停止 | サービス停止 |
| ハッシュ化パスワード | パスワードハッシュ |
| ローカル権限昇格 | 権限昇格 |
| 認証情報窃取 | 認証情報 |
| API認証情報 | 認証情報 |

### 分類を増やす・変えるとき

- `src/data/taxonomy.json` の該当カテゴリに `{ "name", "slug", "members" }` を追加する。slugは英小文字とハイフン。
- 重複表記を見つけたら `aliases` に追加し、既存記事の `tags` も書き換える。
- 分類タグが付かない記事がないか、`npm run build` 後に `/security-notes/tags/` で件数を確認する。

## 定期作成用の短いルール

- タイトル: 「主語 ― 何が起きたか」を40字前後で。件数・被害範囲・手口・CVSSは description へ。推測は入れない。
- description: タイトルから外した具体的な事実を1〜2文で。
- tags: 1つ目は主語。docs/tagging.md の分類タグ表の語を、インシデント種別1つ以上＋攻撃手法・対象技術から付ける。表の「使わない表記」は使わない。固有名詞・CVE番号は自由。
- 続報: `updated` を更新するだけで並び順は変わらない（一覧は公開日順）。
