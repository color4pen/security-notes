# security-notes

セキュリティニュースを「何が問題だったのか（根本原因）」「どう侵入されたのか（侵入経路）」「運用者は何をすべきか（対策と検知）」の観点で読み解き、考察するノートです。

各記事では、ベンダーのアドバイザリ・公的機関の注意喚起・研究者の分析・報道で確認できた内容を「事実」、筆者の推測や意見を「考察」として分けて書いています。確認できなかった情報は書いていません。

## 記事一覧

### 国内（社会面）

続報を追いながら更新する記事です。最終更新日の新しい順に並べます。

- 2026-10-26 [お名前.com デスクトップクラウド ― FX自動売買にも使われるWindowsのクラウド環境で、顧客サーバーに不正なプログラム、影響の可能性は2万6739台、全プランのサーバーを停止](posts/2026-10-22-onamae-desktop-cloud-malicious-program-26k-servers.md)
- 2026-10-26 [アンドエスティHD ― 複数サーバーへの侵入とデータ持ち出し、顧客約250万件・取引先約1万件の情報が漏えいのおそれ](posts/2026-10-24-andst-hd-server-intrusion-2-5m-customers.md)
- 2026-10-26 [ブラストメール（ラクスライトクラウド） ― API用サーバー2台に侵入され、全契約者の情報と一部の配信先リストが持ち出された、新潟日報25万人・名鉄観光13万人など利用組織の公表が相次ぐ](posts/2026-10-23-rakus-light-cloud-blastmail-api-servers-all-customers.md)
- 2026-10-26 [ワイメール（イグレックス） ― メール配信サービスのポータルサーバーから「顧客環境のセットアップ用スクリプト」が持ち出され、自治体・企業のメルマガ配信環境からカード会社を装うフィッシングメール](posts/2026-10-26-igreks-ymail-portal-intrusion-phishing-to-subscribers.md)
- 2026-10-26 [サンケイリビング新聞社 ― 「リビングWeb」などのサーバーに不正アクセス、会員・アンケート回答者の個人情報に漏えいの可能性、広島県・島根県・三重県など受託先の自治体事業にも広がる](posts/2026-10-26-sankei-living-server-intrusion-web-members-municipal-contracts.md)
- 2026-10-26 [Tokio Marine X少額短期保険 ― 契約情報を管理するシステムに不正アクセスの可能性、お客様ポータルと7商品の新規申込を停止、ドコモの熱中症お見舞金保険も受付を前倒しで終了](posts/2026-10-26-tokio-marine-x-suspected-intrusion-portal-new-applications-halted.md)
- 2026-10-26 [チャリロト ― 競輪・オートレース投票アプリの脆弱性を突かれ約3時間半の不正アクセス、チャリカ会員373名の住所・銀行口座・投票履歴などが取得された](posts/2026-10-26-chariloto-app-vuln-373-members-bank-accounts-betting-history.md)
- 2026-10-25 [モスカード／バリューデザイン「Value Card」 ― ハウス電子マネーの発行基盤に不正アクセス、カード番号・PIN・残高の142万件が流出、うちモスカードは113万件でPINを強制変更](posts/2026-10-25-mos-card-valuedesign-value-card-id-pin-balance-1-42m.md)
- 2026-10-25 [グリーンモンスター「FXなび」 ― 10月の不正アクセスの調査で、半年前の4月に別のIPから約619万件のユーザー情報が継続取得されたおそれが判明、原因は「アプリのAPIの機能」](posts/2026-10-25-greenmonster-fx-navi-app-api-6-19m-records-april.md)
- 2026-10-25 [グッドスマイルカンパニー公式ショップ ― 脆弱性を突いた不正アクセスで約3日半にわたり管理情報が閲覧され、会員の氏名・住所・注文履歴・カード下4桁と有効期限に流出の可能性、サイトは閉鎖](posts/2026-10-25-goodsmile-official-shop-admin-data-viewed-card-last4.md)
- 2026-10-25 [パナソニック オペレーショナルエクセレンス ― 人事情報システム導入プロジェクトのメンバーが、社内で禁止の外部生成AIに従業員・元従業員・家族約33万4千人分の個人情報をアップロード](posts/2026-10-25-panasonic-hr-project-prohibited-genai-upload-334k.md)
- 2026-10-24 [沖縄ツーリスト ― 社外からの問い合わせで個人情報漏えいの可能性が判明、OTSレンタカー・ホテル・アクティビティなど5サービスの新規予約を停止](posts/2026-10-22-okinawa-tourist-ots-reservation-services-suspended.md)
- 2026-10-24 [カプコン「CAPCOM ID」 ― 全世界1177万4247件のメールアドレスとログイン履歴情報が漏えい、196件はパスワードを不正に変更されていた](posts/2026-10-23-capcom-id-11-77m-emails-196-passwords-changed.md)
- 2026-10-24 [SpeeCAN RAIDEN（アルカディア） ― 全国の自治体の防災メールを載せた配信基盤に不正アクセス、メールアドレス最大約313万6千件と配信履歴の本文に漏洩の可能性](posts/2026-10-14-arcadia-speecan-raiden-municipal-disaster-mail-3-13m.md)
- 2026-10-24 [JFA公式アプリ「JFA Passport」 ― 10月17日未明から約15時間半の不正アクセスで一部機能を停止、個人情報への影響は調査中](posts/2026-10-19-jfa-passport-app-unauthorized-access-15-hours.md)
- 2026-10-24 [ユミルリンク「Cuenote FC」 ― メール配信基盤の脆弱性からサポート担当者の認証情報を奪われ、専用ASPプラン5システムでメールアドレスを含む延べ約900万件が持ち出し](posts/2026-10-20-ymirlink-cuenote-fc-support-credentials-9m.md)
- 2026-10-24 [佐川急便「お荷物問い合わせサービス」への不正アクセス ― 流出の可能性は最大約5323万件（重複を含む）、約100日分の送り状データが対象](posts/2026-10-24-sagawa-tracking-service-up-to-53m-records.md)
- 2026-10-24 [日本ピザハット ― オンライン注文の決済APIに不正アクセス、お客様ID・メールアドレス・電話番号・セッションログイントークンなどが漏えい](posts/2026-10-24-pizzahut-japan-payment-api-customer-data.md)
- 2026-10-24 [トレジャー・ファクトリー ― 出張買取・トレファク引越の案件管理システムに脆弱性悪用の不正アクセス、顧客メールアドレス74万6277件](posts/2026-10-24-treasure-factory-case-management-746k-emails.md)
- 2026-10-23 [Studio ― ノーコードWeb制作基盤のクラウド環境に不正アクセス、全利用者のアカウントとフォーム送信内容・外部APIキーが、復号鍵ごと流出の可能性](posts/2026-10-17-studio-cloud-environment-all-users-api-keys.md)
- 2026-10-23 [コミックシーモア ― 会員情報を管理するシステムに不正アクセス、メールアドレスとハッシュ化パスワードなどが流出、件数は精査中でサービスは停止](posts/2026-10-17-comic-cmoa-member-system-hashed-passwords.md)
- 2026-10-23 [KOMOJU ― 決済代行の非本番環境の脆弱性を突かれて社内管理画面に不正ログイン、一部加盟店のAPI認証情報と約4100件の個人データが漏洩](posts/2026-10-23-komoju-non-production-vuln-merchant-api-credentials.md)
- 2026-10-23 [GETTIIS（リンクステーション） ― 主催者向け公演登録サービス「Gettii-Lite」の脆弱性を突かれ、チケット購入サイトの会員情報31万7971件が7時間で流出](posts/2026-10-23-linkstation-gettiis-gettii-lite-vuln-318k-members.md)
- 2026-10-22 [NEC ― 開発・保守の委託先が攻撃され、盗まれた正規アカウントで顧客のサーバが暗号化、関係者で共有していたクラウドストレージからもファイルが流出](posts/2026-10-21-nec-subcontractor-credentials-customer-servers-encrypted.md)
- 2026-10-22 [リクルート「カーセンサー」 ― 関連システムへの「外部からの不審なアクセス」を検知、検索サイトから販売店向けの業務システムまで全サービスを停止](posts/2026-10-19-recruit-carsensor-suspicious-access-all-services-halted.md)
- 2026-10-22 [京王電鉄グループ ― 9月のランサムウェア攻撃から3週間、「Qilin」が情報の一部を公開したと主張、会社は真偽と個人情報の流出を調査中](posts/2026-10-18-keio-group-ransomware-qilin-leak-claim.md)
- 2026-10-22 [ニフティ ― 光回線の「回線申込・受付管理システム」に不正アクセス、自社サイト以外から申し込んだ2019年以降の顧客、最大54万2513件に漏えいの可能性](posts/2026-10-20-nifty-line-application-admin-tool-542k.md)
- 2026-10-22 [デジタルアーツ ― AIを使った総点検で、クラウドサービスの運用環境と社内環境に2025年7月頃からの不正アクセスの痕跡、i-FILTER@Cloudなど6サービスの一部顧客情報が閲覧された可能性](posts/2026-10-22-digital-arts-cloud-ops-credentials-intrusion-since-2025-07.md)
- 2026-10-22 [イオングループ ― 13社の計42のWebサイトで不正アクセスを検知、前日の「システムの不具合」の調査で判明し、対象サイトを閲覧できない状態に](posts/2026-10-22-aeon-group-13-companies-42-websites-intrusion.md)
- 2026-10-22 [ママワークス ― 「会員名簿とされるデータがネット上にある」と警察から報告、調査でシステム設定の脆弱性からの不正アクセスが原因と判明、住所・職務経歴・パスワードのハッシュ値などが漏えいの可能性](posts/2026-10-22-mamaworks-member-list-uploaded-police-report.md)
- 2026-10-21 [相次ぐ国内の不正アクセスに各機関が一斉に注意喚起 ― JPCERT/CCが示した4つの攻撃類型と、国家サイバー統括室・IPAが求める点検](posts/2026-10-11-jpcert-nco-ipa-alerts-domestic-breach-wave.md)
- 2026-10-21 [大阪公立大学 ― 仮想化基盤が狙われ約500台のサーバーが停止、バックアップの多くも暗号化](posts/2026-10-06-osaka-metropolitan-university-ransomware-500-servers.md)
- 2026-10-21 [メドレー「アットリンク」 ― 産婦人科向け業務支援システムに不正アクセス、患者等の個人情報漏えいの可能性、最大787医療機関](posts/2026-10-16-medley-atlink-obgyn-system-787-institutions.md)
- 2026-10-21 [岩井コスモ証券 ― ネット取引の委託先トレードワークスで「管理機能の設定不備」を突かれ、4,975名の情報が漏洩、同じ日に7口座で意図しない売買注文、5口座で約定](posts/2026-10-21-iwai-cosmo-tradeworks-admin-function-unauthorized-trades.md)
- 2026-10-21 [住宅省エネ2024キャンペーン ― 国の補助金の申請を受けた事務局（博報堂）のシステムに「外部からの不正操作」、登録事業者2万3918名分が漏洩の可能性、全機能を停止](posts/2026-10-21-jutaku-shoene-2024-hakuhodo-subsidy-system-23k.md)
- 2026-10-21 [アンビションDXホールディングス ― ネットワーク機器から侵入され、業務文書を持ち出された後にランサムウェア、最終報で約14万ファイルの持ち出しと個人情報約58万件の「漏えいのおそれ」](posts/2026-10-21-ambition-dx-ransomware-final-report-140k-files-580k.md)
- 2026-10-21 [アツミ電氣 ADXシリーズDVR ― 非公開の保守用サービスで任意のOSコマンド実行とファームウェアの書き換えができた、古い3機種は修正なしでLANケーブルを抜くよう案内](posts/2026-10-21-atsumi-adx-dvr-hidden-maintenance-services-jvn88864366.md)
- 2026-10-20 [吉野家HD／ApplyNow ― 契約終了後も残っていた応募者データと、分析ツールの脆弱性](posts/2026-10-02-yoshinoya-applynow-applicant-data-breach.md)
- 2026-10-20 [日本経済新聞社 ― 社員のMicrosoft 365から取材先へなりすましメール約9000件、別件でGoogle Workspaceにも不正ログイン](posts/2026-10-05-nikkei-m365-google-workspace-account-takeover.md)
- 2026-10-20 [タイムズカー ― 約660万件が流出、うち約160万件は免許証画像などの本人確認書類](posts/2026-10-05-timescar-web-system-6-6m-accounts-id-documents.md)
- 2026-10-20 [焼肉きんぐ公式アプリ ― 登録1080万件のうち1078万件が流出、ほぼ全会員分の連絡先が抜かれた](posts/2026-10-06-yakiniku-king-app-10-7m-members-breach.md)
- 2026-10-20 [ビューティガレージ EC ― サーバーへの不正侵入でお客様情報775,725件が流出、パスワードハッシュと再設定用Q&Aハッシュも含む](posts/2026-10-16-beauty-garage-ec-775k-password-hashes.md)
- 2026-10-20 [ソースネクスト ― 会員情報取得APIの不正利用で最大22,519,960件、パスワードも対象](posts/2026-10-16-sourcenext-member-api-22-5m.md)
- 2026-10-20 [WASABI SWITCH ― EC一元管理サービスに4日で3つの経路から不正アクセス、注文情報の流出、盗まれた管理者パスワードでの再侵入、テンプレートのPHP機能の悪用](posts/2026-10-19-wasabi-switch-ec-backoffice-repeated-intrusions-template-php.md)
- 2026-10-20 [ふるさとチョイス（トラストバンク） ― 不正アクセスの疑いで関連サービスを一時停止、ふるさとチョイスとデータ連携する他社のふるさと納税サイトでも寄付の受付が止まる](posts/2026-10-20-furusato-choice-trustbank-suspected-intrusion-services-halted.md)
- 2026-10-20 [足利市斎場予約システム ― 委託先ビジネステックの提供システムに不正アクセス、DBへの不正な照会とお知らせ欄への書き込み、故人と申請者の約8,800件に漏えいのおそれ](posts/2026-10-19-ashikaga-funeral-hall-reservation-system-8800.md)
- 2026-10-20 [ブックオフ ― 子会社の会員管理システムから643万件、第2報で対象者約638万人と確定したが侵入経路は非公表](posts/2026-10-11-bookoff-member-system-6-43m-records.md)
- 2026-10-20 [阪急阪神百貨店（H2O） ― 予約サイトを経由して顧客管理システムに不正アクセス、共通ID「H2O ID」のほぼ全会員約126万件が漏えい、通販2サイトでも不正アクセス](posts/2026-10-20-h2o-hankyu-hanshin-dept-reservation-site-h2o-id-1-26m.md)
- 2026-10-20 [クリプトン「SONICWIRE」「D2R」 ― 音源販売サイトに不正アクセス、会員最大約42万件の氏名・メールアドレス・ハッシュ化パスワードが閲覧・取得の可能性、全会員のパスワードを無効化](posts/2026-10-20-crypton-sonicwire-d2r-420k-hashed-passwords.md)
- 2026-10-19 [アエナ公式通販アプリ ― 「機械的な連続アクセス」で会員マイページが閲覧され、最大81万7215人分の住所・電話番号・カード下4桁などに流出の可能性](posts/2026-10-15-aena-ec-app-mypage-817k-members.md)
- 2026-10-19 [TEMAIRAZU（手間いらず） ― 宿泊予約の連携システムに不正アクセス、最大約445万人分の予約情報と、予約内容を知る偽メッセージ](posts/2026-10-12-temairazu-site-controller-4-45m-guests-phishing.md)
- 2026-10-19 [IDCFクラウド ― 東日本リージョン1がランサムウェア攻撃で停止、契約する495の企業・自治体に影響](posts/2026-10-08-idcf-cloud-ransomware-east-japan-region1-495-customers.md)
- 2026-10-19 [ジャパンタイムズ ― 2022年8月に使い終えた管理部門のファイルサーバーがランサムウェア被害、攻撃者が「盗んだ」とするデータを外部サイトで公開](posts/2026-10-19-japan-times-ransomware-retired-file-server-leak.md)
- 2026-10-18 [セカンドリテイリング（ゲオ・セカンドストリート） ― 社内システムへの不正アクセスを確認、2日後の夜からアプリとWebサービスを一斉停止](posts/2026-10-18-second-retailing-geo-2ndstreet-internal-system-apps-halted.md)
- 2026-10-18 [イエローハット ― WEB作業予約システムへの不正侵入で会員179万7124人分が流出、第二報で住所・生年月日・ログインID・パスワードの流出も判明](posts/2026-10-18-yellow-hat-web-reservation-system-1-79m-second-report.md)
- 2026-10-18 [ファンケル・アテニア ― 2社のECサイトに1週間の不正アクセス、会員計約78万5千人分の連絡先や「2次パスワード」のハッシュが流出、原因の機能は停止](posts/2026-10-18-fancl-attenir-ec-sites-785k-members.md)
- 2026-10-18 [日本郵便「国際郵便物の調査請求Web受付サービス」 ― 乗っ取られたサーバーから2か月以上スパム送信、報道では約52万通、利用者約600件の情報も閲覧可能に](posts/2026-10-18-japan-post-international-inquiry-web-service-spam-520k.md)
- 2026-10-17 [skyticket（アドベンチャー） ― 経路の違う3件の不正アクセスで約1464万件、管理機能の不正操作からクラウド上のデータへ](posts/2026-10-11-skyticket-adventure-three-intrusions-14-64m.md)
- 2026-10-17 [リゾートトラスト ― 管理するウェブサイトに約3時間の「異常な作動」、グループ会員約2万6千件とザ・カハラ・横浜の予約者約3万6千件が漏洩](posts/2026-10-13-resorttrust-website-kahala-yokohama-62k-records.md)
- 2026-10-17 [ローソンID ― アプリで本人に情報を表示する仕組みが悪用され215万5345件が漏えい、9月中旬の不正アクセスが判明したのは10月7日](posts/2026-10-10-lawson-id-app-display-mechanism-2-15m-records.md)
- 2026-10-17 [Eストアー「ショップサーブ」 ― アプリの脆弱性から約2か月半にわたりDBの情報が外へ送られ、最終報で約2335万6000人・7858店と確定](posts/2026-10-17-estore-shopserve-final-report-23-35m.md)
- 2026-10-16 [ヤマト運輸 クロネコ代金後払い ― 第4報で顧客約526万件・お届け先約5万件などの持ち出しを確定](posts/2026-10-04-yamato-kuroneko-pay-later-data-breach.md)
- 2026-10-16 [コミューン「Commune」 ― 全コミュニティ共通のログイン用署名鍵が奪われ管理者になりすまし、ヤマハ・スズキなど約30.7万人分の会員情報が漏えい](posts/2026-10-10-commune-community-platform-signing-key-307k-members.md)
- 2026-10-16 [バーガーキング公式アプリ ― 会員情報管理システムへの不正アクセスで約1,118万件が漏えい、クレジットカード番号は非保持](posts/2026-10-16-burger-king-app-member-system-11-18m.md)
- 2026-10-15 [SiteGuard Server Edition CVE-2026-106931 ― 国産WAFの「統計機能」にOSコマンドインジェクション、悪用を確認してroot/SYSTEM権限に](posts/2026-10-15-siteguard-server-edition-cve-2026-106931-stats-os-command.md)
- 2026-10-15 [EC-CUBE公式AmazonPayプラグイン CVE-2026-103671 ― JVNは「注文中のリダイレクト」、開発元は「不正な管理者アカウントの登録」、悪用確認済みの脆弱性](posts/2026-10-15-ec-cube-amazonpay-plugin-cve-2026-103671-admin-account.md)
- 2026-10-14 [ライドオンエクスプレス「銀のさら・釜寅・すし上等」 ― 登録者情報を預けていたサーバー運営会社がランサムウェア被害、漏えいの痕跡は未特定のまま最大約650万件を公表](posts/2026-10-14-rideon-express-ginnosara-server-operator-ransomware-6-5m.md)
- 2026-10-14 [DCM「マイボ」 ― 9月21日の「通常とは異なる多数のアクセス」が不正アクセスと判明したのは、注意喚起を受けた10月8日のログ点検、会員419人分のメールアドレスとポイント情報が漏えい](posts/2026-10-14-dcm-mybo-member-system-419-found-after-alert.md)
- 2026-10-14 [GMOリサーチ＆AI「infoQ」 ― ソフトウェアの脆弱性から会員89万4082件を持ち出し、ポイント287万円分がAmazonギフトコードに](posts/2026-10-07-gmo-research-infoq-948k-members-point-fraud.md)
- 2026-10-13 [ココナラスキルマーケット ― 深夜に遮断したはずの不正アクセスが約11時間後に再来、会員の履歴書449件・職務経歴書関連書類1845件が流出](posts/2026-10-13-coconala-skill-market-resumes-2294-reintrusion.md)
- 2026-10-13 [あっぷらぼ ― メールサーバのデータベース管理用パスワードが外部から突破、「管理用経路が絞られていなかった」設定の不備でメールアドレスと暗号化パスワードが参照の可能性](posts/2026-10-13-applabo-mail-server-db-admin-password-exposed-path.md)
- 2026-10-12 [バイトル／バイトルNEXT（ディップ） ― 「仕様の不備」を突いた海外からのアクセスで、会員のメールアドレス最大約388万件が漏えい](posts/2026-10-12-baitoru-dip-spec-flaw-3-88m-email-addresses.md)
- 2026-10-12 [NewsPicks（ユーザベース） ― 業務用の管理ツールの脆弱性から、メールアドレス32.3万件・カード情報の一部36.2万件が漏えいの可能性](posts/2026-10-12-newspicks-admin-tool-vulnerability-323k-emails.md)
- 2026-10-12 [池上通信機 ― 外部からの通報で発覚、サーバのファイル暗号化とリークサイトへの情報公開](posts/2026-10-05-ikegami-tsushinki-ransomware-leak-site.md)
- 2026-10-11 [アバハウス ― 不審な返金メール報告から発覚、会員・受注DBへの不正アクセス](posts/2026-10-04-abahouse-member-order-database-breach.md)
- 2026-10-10 [第一興商 ― 委託先の従業員PC1台がマルウェアに感染、ビッグエコー会員など約872万4000件が漏えいのおそれ](posts/2026-10-10-daiichikosho-big-echo-vendor-pc-malware-8-72m.md)
- 2026-10-10 [大和証券 ― 問い合わせ管理の委託先に約11時間半の不正アクセス、約11万人分・約22万件が漏えいの可能性](posts/2026-10-06-daiwa-securities-scala-inquiry-service-breach.md)
- 2026-10-09 [戸田建設 ― 取引先への支払いを管理するシステムから5日間にわたり情報が流出、取引データ最大6000件と従業員4778人分](posts/2026-10-09-toda-corporation-payment-system-supplier-employee-data.md)
- 2026-10-09 [HIS ― タイ現地法人のファイルサーバーから最大627人分のパスポート情報が流出の可能性、検知から公表まで約10か月](posts/2026-10-09-his-thailand-subsidiary-file-server-passport-627.md)
- 2026-10-09 [修道学園 ― 学園サーバーへの不正アクセスで取引先・教職員・外部講師の口座情報などが漏えいのおそれ、第2報で学生情報は対象外に](posts/2026-10-09-shudo-gakuen-server-bank-account-info.md)
- 2026-10-08 [楽天ドライブ ― 管理用アカウントの認証情報が奪われ、1万5382アカウント分の保存データが取得・閲覧された](posts/2026-10-08-rakuten-drive-admin-credential-stored-files-15k-accounts.md)
- 2026-10-08 [関西国際大学 ― eポートフォリオから2023年3月までの在籍者の記録が流出、学内ネットワークを止めて授業にも支障](posts/2026-10-08-kansai-university-of-international-studies-eportfolio-breach.md)
- 2026-10-07 [ミスターマックス ― アプリとオンラインストアに不正アクセス、最大173万人分の会員ID・氏名・連絡先が流出](posts/2026-10-07-mrmax-app-online-store-1-73m-members.md)
- 2026-10-07 [旭化成セラピューティクス「Pharma DIGITAL」 ― 運営委託先の会員DBに不正アクセス、医療従事者最大約51万4000人分が閲覧・取得の可能性](posts/2026-10-07-asahi-kasei-pharma-digital-vendor-breach.md)
- 2026-10-06 [セイコーマートアプリ ― 会員57万4647人分が閲覧された不正アクセス（原因は非公表）](posts/2026-10-02-seicomart-app-member-data-breach.md)
- 2026-10-04 [第一ライフグループ／第一生命 ― 人事システム不正アクセスで従業員・退職者約12万人分が流出の可能性](posts/2026-10-04-dai-ichi-life-hr-system-employee-data-breach.md)
- 2026-10-02 [集英社 HAPPY PLUS COMMUNITY ― CMS設定不備から特権アカウントが作られブロガー2835人分が漏えい](posts/2026-10-02-shueisha-happy-plus-community-breach.md)

### 海外（国際面・新しい順）

- 2026-10-26 [Downloads に置かれた AGENTS.md がコーディングエージェントを乗っ取る ― Web が勝手に書けるフォルダーが「信頼された作業場所」になっていた](posts/2026-10-26-agents-md-downloads-folder-ai-coding-agent-hijack.md)
- 2026-10-26 [Tailworm（Tailscale SSH ほか11件） ― 認証を省いた「root のまま動くSSHサーバー」で、ソケット転送が root 専用の docker.sock と systemd に届いた、修正版はまだない](posts/2026-10-26-tailworm-tailscale-ssh-unix-socket-forwarding-root.md)
- 2026-10-25 [Brotli CVE-2026-111497（Node2Shell） ― 「壊れたデータ」を「続きを待つ」と取り違えた圧縮ライブラリが、Node.js・Bun・Envoy・Pythonの通信を同時にRCEの入口に変えた](posts/2026-10-25-brotli-cve-2026-111497-node2shell-decoder-oob-write.md)
- 2026-10-25 [Time4Popcorn の放置されたアップデーター ― 失効したドメインを登録すれば数百万台にSYSTEM/root権限でコードを配れた、研究者は「善意の更新」で200万回以上止めた](posts/2026-10-25-time4popcorn-abandoned-updater-domains-operation-ixim.md)
- 2026-10-24 [Railway の環境変数流出 ― ビルド基盤の権限昇格からCIの認証情報へ、約10万ワークスペースの秘密情報が復号されたおそれ、狙いはAIのAPIキー](posts/2026-10-24-railway-build-infrastructure-env-vars-ai-keys-distillation.md)
- 2026-10-24 [INC・The Gentlemen系アフィリエイトの「AIが実行し、人が承認する」侵入 ― むき出しのC2から見えた8,257件のAI対話、46本の暗号化ツール、62組織](posts/2026-10-24-inc-gentlemen-affiliates-phantom-ai-opencode-exposed-servers.md)
- 2026-10-24 [MythicRatatoskr ― C2をYggdrasilメッシュ網の中に隠したバックドア、UAC-0099の侵入をSandwormが引き継ぎウクライナの穀物物流企業でデータ消去](posts/2026-10-24-mythicratatoskr-yggdrasil-uac-0099-sandworm-wiper.md)
- 2026-10-23 [APT41のUEFIブートキット「BlackX」 ― 最新パッチを当てた端末でもSecure Bootを破れた、失効を「手動で有効にする」更新の隙間](posts/2026-10-23-apt41-blackx-uefi-bootkit-baton-drop-secure-boot-revocation.md)
- 2026-10-23 [VeloCloud Orchestrator CVE-2026-114625 ― 閲覧だけの利用者がSQLインジェクションで「superuser operator」に、SD-WAN管理サーバーで7月・9月に続く悪用](posts/2026-10-23-velocloud-orchestrator-cve-2026-114625-read-only-to-superuser-sqli.md)
- 2026-10-22 [PHP2Shell（CVE-2026-109618／109619） ― メモリ不足で途中終了したリクエストの「後片付け漏れ」を次のリクエストが踏む、アプリより先に動くPHP本体の認証なしRCE](posts/2026-10-22-php2shell-cve-2026-109618-109619-oom-stale-state-rce.md)
- 2026-10-22 [LiteLLM 1.107.0 のバックドア混入 ― ログに残った開発者のGitHubトークンで正規のリリース工程を乗っ取り、ハイフン1つ違いの偽リポジトリから「正しい来歴付き」で配った](posts/2026-10-22-litellm-1-107-0-release-pipeline-hijack-lookalike-fork.md)
- 2026-10-21 [eMudhra 中間CA 8枚の秘密鍵漏洩 ― P-384の秘密鍵が「256未満の整数」だった、ブラウザは数時間で遮断、失効情報を見ないソフトはルートごと外すしかなかった](posts/2026-10-21-emudhra-intermediate-ca-p384-private-keys-under-256.md)
- 2026-10-21 [UpdraftCentral の接続鍵流出 ― 開発元のサイトから盗まれた正規の署名鍵で、WordPressサイトに「正しく署名された」バックドア入りプラグインが送り込まれた](posts/2026-10-21-updraftcentral-cloud-keys-stolen-signed-backdoor-plugins.md)
- 2026-10-21 [OVHcloud CLI のリリース差し替え ― 1年前に拡張機能で盗まれた開発者の鍵で、公開済み5リリースのバイナリとチェックサムが93分間すり替わった](posts/2026-10-21-ovhcloud-cli-release-assets-replaced-glassworm-developer-account.md)
- 2026-10-20 [Rank Math PRO 3.0.123 の配布物改ざん ― 公式サイトからの約11時間のダウンロードと更新に、自分を作り直すバックドアが入っていた](posts/2026-10-20-rank-math-pro-3-0-123-supply-chain-self-restoring-backdoor.md)
- 2026-10-20 [Plex2Shell ― 認証なしのSSRFから管理者トークン、コーデックのdlopenへつなぎ、公開翌日にマイナーと住宅IP用プロキシが配られた](posts/2026-10-20-plex2shell-unauth-rce-cryptominer-proxyware.md)
- 2026-10-20 [Siemens Software Center CVE-2026-110936 ― 署名付き正規EXEの隣に置いたDLLが読み込まれ、Romulus系ClickFixの運び屋になった](posts/2026-10-20-siemens-software-center-cve-2026-110936-dll-sideloading-romulus.md)
- 2026-10-19 [Broadcom製Wi-FiのWPS処理に16年前からの欠陥 ― パスワードを知らない電波の届く相手がルーターのrootに、CVEもなく「直らない」機種も](posts/2026-10-19-broadcom-wps-eap-reassembly-overflow-forever-day-routers.md)
- 2026-10-19 [OpenBSD「Big Fish」― 37年前から続く共有メモリ添付カウンタの整数オーバーフローとUAFで、KARL／SMAP／SMEP付きのままローカルroot](posts/2026-10-19-openbsd-big-fish-shm-nattch-37-year-local-root.md)
- 2026-10-19 [Drupal core Field UI の致命的RCE CVE-2026-108097 ― 本体だけでは届かないが、寄与モジュール経由で認証なしの経路もあり、Entity Listにも同型](posts/2026-10-19-drupal-field-ui-rce-cve-2026-108097-entity-list.md)
- 2026-10-18 [ConnectWise Cloud Backup（旧SkyKick）の認証情報悪用 ― バックアップ用アプリ1つの鍵で数百のMicrosoft 365テナントへ、MFAも条件付きアクセスも効かなかった](posts/2026-10-18-connectwise-cloud-backup-skykick-m365-app-credential-abuse.md)
- 2026-10-18 [npmパッケージ imgdecode（MALFEX） ― インストールスクリプトなし、require()した瞬間に同梱のWindows用DLLがシェルコードを取りに行く](posts/2026-10-18-malfex-npm-imgdecode-native-addon-shellcode-loader.md)
- 2026-10-18 [OpenAIの研究モデルが「公開データ集め」の途中で他組織のシステムに侵入 ― 公開JSに残った認証情報、署名を確かめないJWT、ダウンロード機能のパストラバーサルを自分で見つけて使った](posts/2026-10-18-openai-misalignment-reports-agent-broke-into-third-party-systems.md)
- 2026-10-17 [BeyondTrust Remote Support CVE-2026-102764 ― 内部メッセージの「送り主」を確かめない欠陥で、遠隔サポート装置ごと奪われ社内の端末へ](posts/2026-10-17-beyondtrust-remote-support-cve-2026-102764-armory-castle-zero-day.md)
- 2026-10-17 [FortiOS CVE-2025-61624とPEERSTITCH ― FortiManager 1台から500台超のFortiGateの設定と鍵が抜かれ、ディスクにもネットにも跡を残さない常駐型の実装へ](posts/2026-10-17-fortios-cve-2025-61624-peerstitch-fortimanager-500-firewalls.md)
- 2026-10-17 [AOMEI Backupper の更新サーバー改ざん ― 書き換えは1回5〜10分、その間に更新を確かめた端末だけがバックドアを受け取った](posts/2026-10-17-aomei-backupper-ephemeral-update-server-tampering-unc7017.md)
- 2026-10-16 [Linuxカーネル PwnEscape（CVE-2026-99999） ― ゲストが渡した「チェックサムの書き込み位置」が検証済みのIPv4ヘッダーを書き換え、ホストのメモリが外へ漏れた](posts/2026-10-16-linux-kernel-pwnescape-cve-2026-99999-guest-to-host-checksum.md)
- 2026-10-16 [Palo Alto Networks PAN-OS CVE-2026-0322 ― 管理画面にログインできる者がファイアウォールのrootに、「認証が必要」なコードインジェクションが悪用されてKEV入り](posts/2026-10-16-pan-os-cve-2026-0322-management-interface-authenticated-rce.md)
- 2026-10-16 [AdFection ― 広告が表示されただけで感染、イスラエルの広告会社Discover-Techの「狙った1台にだけ攻撃コードを返す」配信でAl JazeeraにCandiruのスパイウェア](posts/2026-10-16-citizen-lab-discover-tech-adfection-candiru-al-jazeera.md)
- 2026-10-15 [Cisco Secure Email Gateway CVE-2026-76519 ― 添付ファイル1通でroot、マルウェア対策の「ファイルレピュテーション」が攻撃の入口になった今年2件目のゼロデイ](posts/2026-10-15-cisco-secure-email-gateway-cve-2026-76519-amp-attachment-file-write.md)
- 2026-10-15 [Microsoft 2026年10月の月例更新 CVE-2026-96951 ― 1,400件超の中で「いま悪用されている」のは、添付ファイルのMark of the Webをすり抜けるWindows Shellの欠陥だけ](posts/2026-10-15-microsoft-october-2026-patch-tuesday-cve-2026-96951-motw-bypass.md)
- 2026-10-15 [Nextcloud Collabora Built-in CODE CVE-2026-110447 ― 文書サーバが止まっている一瞬だけ、proxy.phpがリクエストのパスをbashに渡しWebシェルが生えた](posts/2026-10-15-nextcloud-collabora-richdocumentscode-cve-2026-110447-proxy-php-rce.md)
- 2026-10-14 [Ivanti Connect Secure CVE-2026-104935 ― 公開ページのURLと別のCGIを指すヘッダーで認証を素通り、3つのゼロデイの連鎖でroot、権限昇格はまだ未修正](posts/2026-10-14-ivanti-connect-secure-cve-2026-104935-zero-day-chain-uta0576.md)
- 2026-10-14 [Docker Hub CVE-2026-105445「GhostPat」 ― アカウントを組織に変えて他人を所有者に指定すると、自分のアクセストークンがその人として通った](posts/2026-10-14-docker-hub-ghostpat-cve-2026-105445-pat-transfer.md)
- 2026-10-14 [npmのTrusted Publishing「SlugFest」 ― 信頼の紐づけ先を「owner/repo」の名前で覚えていたため、空いた名前を取り直すだけで他人のパッケージを公開できた](posts/2026-10-14-npm-trusted-publishing-slugfest-repository-slug-reclaim.md)
- 2026-10-13 [GitLab CVE-2026-97229 ― CI/CDの正規表現コンパイラで整数オーバーフロー、ログインなしでサーバー上のコード実行（CVSS 10.0）](posts/2026-10-13-gitlab-cve-2026-97229-cicd-regex-compiler-unauth-rce.md)
- 2026-10-13 [フランスのスーパー数百店で冷蔵・冷凍設備が「50℃の霜取り」に ― ネットにつながったDanfoss製冷凍機管理装置が狙われた](posts/2026-10-13-danfoss-ak-sm-refrigeration-french-supermarkets-forced-defrost.md)
- 2026-10-13 [Bricksforge CVE-2026-85097 ― 検査済みの画像を「.php」の名前で置き直させる、WordPressフォーム機能の認証なしRCEが悪用中](posts/2026-10-13-bricksforge-cve-2026-85097-polyglot-upload-rce.md)
- 2026-10-12 [XRP Ledgerの支払いエンジン整数オーバーフロー ― AIが見つけた約10年の欠陥で、1トランザクションあたり約18兆XRPを鋳造できた](posts/2026-10-12-xrpl-payment-engine-xrp-overflow-infinite-mint.md)
- 2026-10-12 [Ledger × CryptoBilis ― 正規リセラー経由の端末に不正なハードウェアインプラント、オンチェーンで約9,320万ドル規模の一斉引き出し](posts/2026-10-12-ledger-cryptobilis-hardware-implant-southeast-asia.md)
- 2026-10-12 [P7 DarkSword ― 漏洩したiOSエクスプロイトキットが進化、端末上でキーチェーンと暗号資産ウォレットを抜き双方向C2へ](posts/2026-10-12-p7-darksword-ios-exploit-kit-wallet-theft.md)
- 2026-10-11 [GhostAction再来 ― 「Security Audit」を名乗るワークフローが数百のGitHubリポジトリに押し込まれ、git履歴の奥に残った鍵まで掘り出す](posts/2026-10-11-ghostaction-github-actions-security-audit-git-history.md)
- 2026-10-11 [Chromiumの国際化ドメイン表示 ― キリル文字「ө」とフック付き「ƙ」で、аррӏө.com や oƙta.com が本物そっくりのままアドレスバーに出る](posts/2026-10-11-chromium-idn-homograph-cyrillic-oe-latin-k-hook.md)
- 2026-10-11 [韓国の金融機関を襲った連続侵入 ― 中国製のAI自動ペネトレーションツール「ARTEX」とClaude Codeで、銀行の「周辺システム」が次々に破られた](posts/2026-10-11-artex-ai-pentest-tool-south-korea-financial-breaches.md)
- 2026-10-10 [Citrix NetScaler CVE-2026-107406 ― SAML処理のメモリオーバーフローでRCEのおそれ、先週のゼロデイ修正版もSAML IdPなら対象](posts/2026-10-10-netscaler-saml-cve-2026-107406-memory-overflow-rce.md)
- 2026-10-10 [AhsayCBS CVE-2026-105133／105134 ― 認証回避とコマンド注入の連鎖でバックアップ管理コンソールが奪われ、最新版もまだ直っていない](posts/2026-10-10-ahsaycbs-cve-2026-105133-105134-xmrig-webshell.md)
- 2026-10-10 [AnyDesk Linux AnyPwn ― 「クラッシュ修正」とだけ書かれたヒープオーバーフローに、認証前rootの攻撃コードが公開された](posts/2026-10-10-anydesk-linux-anypwn-heap-overflow-preauth-rce.md)
- 2026-10-09 [tensorlake npm 0.5.144 ― 正規リポジトリのmainから出たShai-Huludワーム、トークンを取り消すとホームを消す人質機構](posts/2026-10-09-tensorlake-npm-shai-hulud-hostage-token.md)
- 2026-10-09 [Cisco NX-OS CVE-2026-76465 ― MPLS OAMのecho-request検証不備で認証なしroot実行、Nexus 3000/9000の診断機能が攻撃面に](posts/2026-10-09-cisco-nxos-cve-2026-76465-mpls-oam-rce.md)
- 2026-10-09 [Splunk Enterprise CVE-2026-76268 ― 検索ヘッドクラスタのPatroni REST APIが認証なし、到達できればOSコマンド実行](posts/2026-10-09-splunk-cve-2026-76268-patroni-rest-api.md)
- 2026-10-08 [ガーナ・シエラレオネ・米領サモアのccTLD乗っ取り ― 国別ドメインのDNSを書き換え、GoogleやYouTubeの正規のHTTPS証明書を取得](posts/2026-10-08-cctld-registry-hijack-gh-sl-as-google-certificates.md)
- 2026-10-08 [SonicWall SMA1000 CVE-2026-102255 ― ログイン前の「意図しない別経路」から内部機能に届くSSRF、今年3度目のCVSS 10.0](posts/2026-10-08-sonicwall-sma1000-cve-2026-102255-preauth-ssrf.md)
- 2026-10-08 [FortiBleed ― 使い回された認証情報と古いSHA-256のパスワード保存を突くFortiGate乗っ取り、FBIとシークレットサービスが「管理者の締め出し」を警告](posts/2026-10-08-fortibleed-fbi-usss-fortigate-admin-lockout.md)
- 2026-10-07 [Atlassian Data Center CVE-2026-21589 ― ログインなしでWebルート内のファイルを読める欠陥、Jira・Confluenceなど8製品の自前運用版が対象](posts/2026-10-07-atlassian-data-center-cve-2026-21589-file-access.md)
- 2026-10-07 [Ninja Forms／WPC Product Bundles の蓄積型XSS悪用 ― 管理者が投稿を開いた瞬間に、一覧に出ない管理者と裏口ログインが作られる](posts/2026-10-07-wordpress-ninja-forms-wpc-stored-xss-hidden-admin.md)
- 2026-10-07 [LibreOffice CVE-2026-63277／OpenOffice CVE-2026-59265 ― 表計算ファイルを開くだけで外部のJavaコードが動く、マクロの警告を通らない「データ連携」の連鎖](posts/2026-10-07-libreoffice-openoffice-jdbc-classpath-rce.md)
- 2026-10-06 [Cling（ClingSTUN）― 公開STUNサーバーとのやり取りに命令を紛れ込ませ、GoogleのSTUNを装って届くIoTボットネット](posts/2026-10-06-cling-clingstun-stun-c2-iot-botnet.md)
- 2026-10-06 [Microsoft Exchange Server CVE-2026-96940 ― 社内の一般ユーザーが他人のメールボックスを読める認可の不備、予定より前倒しで「V2」更新を配布](posts/2026-10-06-exchange-cve-2026-96940-mailbox-access.md)
- 2026-10-06 [デンマーク CPR（中央住民登録）― 民間企業の正規の照会権限が悪用され、約880万人分の氏名・住所・個人番号が抜かれた](posts/2026-10-06-denmark-cpr-registry-8-8m-lawful-access-abuse.md)
- 2026-10-05 [Citrix NetScaler CVE-2026-88779 ― SAML署名の正規化処理で認証デーモンが落ちる、「ただのDoS」が再起動トリガーとして悪用された](posts/2026-10-05-netscaler-saml-cve-2026-88779-reboot-trigger.md)
- 2026-10-05 [TA419 ― 元米政府高官やAnthropic社員を装ってAI政策の専門家に接近、MFAごとセッションを奪うAitMフィッシング](posts/2026-10-05-ta419-ai-policy-aitm-frameless-bitb.md)
- 2026-10-05 [GitLab AI Gateway CVE-2026-90970 ― カスタムフローのプロンプトテンプレートがサンドボックスを破りコマンド実行、自前ホストのゲートウェイは要更新](posts/2026-10-05-gitlab-ai-gateway-cve-2026-90970-template-sandbox.md)
- 2026-10-04 [Zammad CVE-2026-102489／102490 ― セッション固定からrootまで秒単位、DIVDを襲ったagentic AIのゼロデイ連鎖](posts/2026-10-04-zammad-cve-2026-102489-102490-divd-ai-agent.md)
- 2026-10-04 [Rejetto HFS CVE-2026-61500 ― Math.random()署名鍵とPRNG漏洩、Mythos発見から公開後すぐ悪用](posts/2026-10-04-rejetto-hfs-cve-2026-61500-mythos-math-random.md)
- 2026-10-04 [Dell CSM CVE-2026-63688ほか ― 認証なしでストレージ管理者権限、Kubernetesノードrootまで届く欠陥群](posts/2026-10-04-dell-csm-cve-2026-63688-authorization-flaws.md)
- 2026-10-02 [Fortinet FortiMail CVE-2026-104286 ― 管理GUIのパストラバーサルとNULLバイトで任意ファイル書き込み、修正版未出荷のままKEV入り](posts/2026-10-02-fortimail-cve-2026-104286.md)
- 2026-10-02 [Warlock（Longlegs / Storm-2603）― SharePoint侵入からSYSVOL複製でドメイン全体へランサムを配る](posts/2026-10-02-warlock-longlegs-sharepoint-sysvol.md)
- 2026-10-02 [Star Blizzard RedFlick ― ClickFixからVHDX＋スケジュールタスクへ、1操作でCosmicPulseを入れるespionage配信](posts/2026-10-02-star-blizzard-redflick-cosmicpulse.md)
- 2026-10-01 [Bitget 3億8750万ドル流出 ― 守るはずのセキュリティ製品がウォレットへの踏み台になった](posts/2026-10-01-bitget-387m-heist-security-appliance-zero-day.md)
- 2026-10-01 [Zimbra CVE-2026-73570 ― 1通のSMTPがSNMP通知を経てシェルになる、パッチから公表までの「隙間」の悪用](posts/2026-10-01-zimbra-snmp-cve-2026-73570.md)
- 2026-10-01 [Citrix NetScaler ADC/Gateway CVE-2026-88772/88771 悪用 ― DTLSの断片長を信じたパケットエンジンと、パッチ後に残る足場](posts/2026-10-01-citrix-netscaler-cve-2026-88772-88771.md)
- 2026-10-01 [Cisco Catalyst SD-WAN Manager 認証回避ゼロデイ CVE-2026-76504 ― 1文字のURIエンコードが管理者APIを開けた](posts/2026-10-01-cisco-sdwan-manager-cve-2026-76504.md)

### 脆弱性（注意報・新しい順）

- 2026-10-25 [HPE Aruba AOS-8／AOS-10 ― 無線LANコントローラーとアクセスポイントに、認証なしでRCEできるCVSS 10.0の欠陥が8件（全72件）](posts/2026-10-25-hpe-aruba-aos-8-aos-10-eight-cvss10-cve-2026-79844.md)
- 2026-10-25 [Pillow 13.0.0 ― 画像を開くだけでコード実行に至る欠陥をまとめて修正、12.3.0以前は全面的に影響（CVSS 9.2〜9.8）](posts/2026-10-25-pillow-13-0-0-critical-fpx-mpo-eps-rce-fixes.md)
- 2026-10-23 [GitLab CVE-2026-110264 ― .orgファイルの表示だけで認証なしRCE、10月12日の修正済み環境もまだ対象（CVSS 10.0）](posts/2026-10-23-gitlab-cve-2026-110264-org-mode-onigmo-rce.md)
- 2026-10-23 [プリザンター CVE-2026-113438 ― LDAP認証の特定構成で、ログインIDだけでパスワードなしログイン](posts/2026-10-23-pleasanter-ldap-auth-bypass-cve-2026-113438.md)

## 記事の書き方

記事は `posts/` にMarkdownで置きます（ファイル名は `YYYY-MM-DD-内容がわかる英数字.md`）。サイトは国内の記事を「社会面」、海外の記事を「国際面」、旬の脆弱性の記事を「注意報（脆弱性）」として分けて表示します。

### front matter

```yaml
---
title: "見出し ― 副見出し" # 「 ― 」の後ろは記事ページで副見出しとして表示
date: 2026-10-01 # 公開日（必須）
updated: 2026-10-03 # 最終更新日（任意。続報を追記したら更新）
region: domestic # domestic（国内）| overseas（海外）| vuln（脆弱性）。省略時は overseas
status: ongoing # 国内向け・任意：ongoing（続報待ち）| concluded（確定）
issue: 12 # 国内向け・任意：続報を追跡するGitHub Issue番号
tags: [組織名, 不正アクセス, ゼロデイ] # 1つ目は分類ラベルとして目立たせて表示
description: 一覧に出す要約（任意。省略時は本文の最初の箇条書き）
---
```

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `title` | ○ | 記事タイトル |
| `date` | ○ | 公開日 |
| `tags` | | タグの配列。1つ目は分類ラベル。タグ絞り込みの候補は「ゼロデイ」「認証回避」「Webシェル」（各タブに該当記事があるものだけ表示） |
| `region` | | `domestic`（国内）・`overseas`（海外）・`vuln`（脆弱性）のいずれか。省略すると `overseas` 扱いだが、明記を推奨 |
| `updated` | | 最終更新日。公開日より新しいと一覧に「続報あり」（国内）/「更新」（海外）の印が付く |
| `status` | | 国内向け。`ongoing` は「続報待ち」、`concluded` は「確定」として記事ヘッダーに表示。`ongoing` は一覧にも「続報待ち」の印が付く |
| `issue` | | 国内向け。追跡用GitHub Issueの番号。記事ヘッダーにIssueへのリンクを出す |
| `description` | | 一覧・メタ情報に使う要約 |

- 記事一覧は「すべて」「国内」「海外」の3つのタブで切り替えます。タブはそれぞれ別のURLを持つページです。

  | タブ | URL | 並び順 |
  | --- | --- | --- |
  | すべて | `/security-notes/` | 公開日の新しい順（各記事に国内/海外の別を表示） |
  | 国内（社会面） | `/security-notes/domestic/` | 最終更新日（`updated`、なければ `date`）の新しい順 |
  | 海外（国際面） | `/security-notes/overseas/` | 公開日の新しい順 |

- 検索・タグ絞り込みは、表示中のタブの記事が対象です。記事が0本のタブでは「準備中」と表示します。
- 記事ページでは、その記事の面（国内/海外）のタブが選択状態になり、「記事一覧へ」のリンクもそのタブへ戻ります。
- 国内記事の記事ヘッダーには、続報の状況（続報待ち / 確定）・最終更新日・追跡Issueを帯で表示します。

### 冒頭の要点枠

本文に `## 要点` という見出しを書くと、そこから次の `##` 見出しまでが、記事冒頭の「要点」枠として表示されます。枠の中は `###` 見出しごとに項目を分けます。Markdownだけで書け、GitHub上でもそのまま読めます。

- `## 要点` はどこに書いても本文の先頭（タイトル直後）に表示されますが、原文の読みやすさのため `# タイトル` の直後に書いてください。
- 要点枠は目次には載りません。一覧の要約（`description` がない場合）にも使われず、`## 概要` などの最初の箇条書きが使われます。
- 小見出しの名前は自由ですが、次の名前は表示が変わります：「発表された事実」「わかったこと」「影響バージョン」（事実）、「わかっていないこと」（未確認）、「関係しそうな既知の手口」（考察）、「今すぐやること」（行動）。
- 要点枠には本文で出典を示した内容だけを書き、新しい事実を足さないでください。推測を書くときは「（考察）」と明記します。

国内の例：

```md
## 要点

### 発表された事実

- 〇〇社が、不正アクセスにより顧客情報が漏えいした可能性があると公表した（出典と発表日を書く）。

### わかっていないこと

- 侵入経路
- 漏えいした情報の件数・範囲

### 関係しそうな既知の手口

- （考察）△△の既知の脆弱性を悪用した侵入事例（出典を書く）と、発表された経緯が似ている。
```

海外の例：

```md
## 要点

### 影響バージョン

- 製品名 20.9 系は 20.9.10.1 で修正。回避策はない。

### 今すぐやること

- 更新前に証跡を保全する。
- 修正版へ更新する。
```

### 構成テンプレート

各記事では、出典で確認できた内容を「事実」、筆者の推測や意見を「考察」として分けて書きます。段落の先頭に `**事実**` / `**考察**`（`**事実（Microsoft）**` のような補足も可）だけの行を置くと、ラベルとして表示されます。確認できなかった情報は書きません。

海外（overseas）の記事：

1. 要点（影響バージョン / 今すぐやること）
2. 概要（3行）
3. 何が起きたか（時系列）
4. 技術的な問題点（根本原因）
5. 攻撃・侵入経路
6. なぜ防げなかったか・構造的要因の考察
7. 運用者向けの具体的な対策と検知ポイント
8. 参考リンク

国内（domestic）の記事：

1. 要点（発表された事実 / わかっていないこと / 関係しそうな既知の手口）
2. 概要（3行）
3. 何が起きたか（時系列）― 発表日・発表元・内容を1行ずつ
4. 発表内容の整理（被害の範囲、対象サービス、利用者への案内）
5. 関係しそうな既知の手口（考察。同種の事例や既知の脆弱性との関係）
6. 利用者・運用者がいまできること
7. 参考リンク（一次情報の発表ページを先頭に）

### 続報の追記方法（国内）

1. `## 何が起きたか（時系列）` の表に、続報の行を追加する（既存の行は書き換えず、訂正があれば訂正した旨を新しい行に書く）。
2. front matter の `updated` を続報の日付に更新する。一覧で「続報あり」の印が付き、国内の一覧の上位に上がる。
3. 要点枠で、判明したことを `### わかっていないこと` から `### わかったこと`（なければ新設）へ移す。判明した日付や出典を添える。
4. 本文の該当する節と参考リンクを更新する。
5. 調査結果の最終報告などで主要な事実が出そろったら、`status: concluded` にする。追跡Issueがあれば、続報の要約を残してクローズする。

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

記事の `title`、`date`、`tags`、`region` などを一覧・記事ヘッダーに使用します（項目は「記事の書き方」を参照）。説明がない記事では冒頭の箇条書きを一覧の要約に使います。検索はタイトル・タグ・要約を対象にします。

デザインは生成り色の紙面と墨色を基調に、明朝体の見出しと細い罫線を使った新聞風です。本文と操作部分は読みやすいゴシック体にしています。トップはヒーローを設けず、紙面タブ（すべて / 国内 / 海外）・記事一覧・検索・タグ絞り込みをすぐ使える構成です。記事ページは冒頭の要点枠、自動目次、事実・考察のラベル、横スクロール対応の表とMermaid図を備えています。

RSSフィードは `/security-notes/rss.xml` に生成されます。

公開先: https://color4pen.github.io/security-notes/

`main` にプッシュすると、GitHub Actionsがチェック・ビルドを実行し、成功したサイトをGitHub Pagesへ公開します。手動実行はActionsの「Deploy GitHub Pages」から行えます。`site` と `base` は `astro.config.mjs`、公開処理は `.github/workflows/pages.yml` に設定しています。ローカル開発にはNode.js 24を推奨します。
