# security-notes

セキュリティニュースを「何が問題だったのか（根本原因）」「どう侵入されたのか（侵入経路）」「運用者は何をすべきか（対策と検知）」の観点で読み解き、考察するノートです。

各記事では、ベンダーのアドバイザリ・公的機関の注意喚起・研究者の分析・報道で確認できた内容を「事実」、筆者の推測や意見を「考察」として分けて書いています。確認できなかった情報は書いていません。

## 記事一覧

### 国内（社会面）

続報を追いながら更新する記事です。公開日の新しい順に並べます（サイトの一覧と同じ）。

<!-- posts:domestic:start -->
- 2026-10-29 [アララ メッセージ ― 不正アクセスで配信リストのメールアドレスが流出](posts/2026-10-29-arara-message-mail-delivery-3m-addresses-leak.md)
- 2026-10-29 [ベネフィット・ワン「トク買」 ― 委託先への不正アクセスで会員情報が漏えい](posts/2026-10-29-benefit-one-tokugai-forestec-member-data-payment-auth.md)
- 2026-10-29 [花キューピット ― 管理システムへの不正アクセスで会員情報が漏えい](posts/2026-10-29-hana-cupid-admin-system-intrusion-4-24m-members.md)
- 2026-10-29 [JAL・JTA ― 委託先アマデウスへの不正アクセスで予約情報が参照された](posts/2026-10-29-jal-jta-amadeus-pss-reservation-records-92k.md)
- 2026-10-29 [ソニー生命 ― 不正アクセスで代理店扱いの他社契約者情報が漏えい](posts/2026-10-29-sony-life-customer-web-medicare-life-385k.md)
- 2026-10-28 [ベーシック「ferret One」 ― 内部管理機能に不正アカウントを作成された](posts/2026-10-28-basic-ferret-one-internal-admin-rogue-account.md)
- 2026-10-28 [スマートシェア「OWNLY」 ― ファイルアップロードの不備から参加者情報流出](posts/2026-10-28-smartshare-ownly-file-upload-mos-campaign-14k.md)
- 2026-10-28 [So-net ― 会員データベースに不正アクセス、会員情報が漏えい](posts/2026-10-28-sonet-member-db-intrusion-plala-2-58m.md)
- 2026-10-28 [ツクツク!!! ― 決済画面の改ざんでカード情報漏えいの可能性](posts/2026-10-28-tsukutsuku-card-page-tampering-19k-cards.md)
- 2026-10-28 [UPSIDER「Breakthrough GRID」 ― 会員サイトから情報を持ち出された](posts/2026-10-28-upsider-breakthrough-grid-member-site-data-exfiltrated.md)
- 2026-10-27 [バンダイロジパル ― 物流システムに不正アクセス、配送情報漏えいの可能性](posts/2026-10-27-bandai-logipal-logistics-system-ichiban-kuji-online-shipping-data.md)
- 2026-10-27 [ギフティ ― システムの脆弱性を突かれeギフトを不正発行された](posts/2026-10-27-giftee-system-vuln-egift-unauthorized-issuance-550m-yen.md)
- 2026-10-27 [Joshin ― ネットワークに不正アクセス、会員情報漏えいの可能性](posts/2026-10-27-joshin-network-intrusion-6-23m-members-subscription-reform-photos.md)
- 2026-10-27 [楽天トラベル ― 海外ホテル予約ページなどに不正アクセス](posts/2026-10-27-rakuten-travel-overseas-hotel-multilingual-sites-2-6m.md)
- 2026-10-27 [台東区「ささえ～る」 ― 委託先で不正な管理者が作られ情報流出](posts/2026-10-27-taito-sasaeru-app-mirabo-rogue-admin-account-208.md)
- 2026-10-27 [ワイズマン「MeLL+」 ― クラウド環境に不正アクセス、サービス停止](posts/2026-10-27-wiseman-mell-plus-cloud-intrusion-care-services-halted.md)
- 2026-10-26 [チャリロト ― 投票アプリの脆弱性で会員の口座情報などが取得された](posts/2026-10-26-chariloto-app-vuln-373-members-bank-accounts-betting-history.md)
- 2026-10-26 [ワイメール ― ポータルから持ち出されたスクリプトでフィッシング配信](posts/2026-10-26-igreks-ymail-portal-intrusion-phishing-to-subscribers.md)
- 2026-10-26 [サンケイリビング新聞社 ― サーバーに不正アクセス、会員情報漏えいの可能性](posts/2026-10-26-sankei-living-server-intrusion-web-members-municipal-contracts.md)
- 2026-10-26 [Tokio Marine X少額短期保険 ― 不正アクセスの可能性で新規申込を停止](posts/2026-10-26-tokio-marine-x-suspected-intrusion-portal-new-applications-halted.md)
- 2026-10-25 [グッドスマイルカンパニー ― 公式ショップに不正アクセス、サイト閉鎖](posts/2026-10-25-goodsmile-official-shop-admin-data-viewed-card-last4.md)
- 2026-10-25 [グリーンモンスター「FXなび」 ― アプリのAPIから情報取得のおそれ](posts/2026-10-25-greenmonster-fx-navi-app-api-6-19m-records-april.md)
- 2026-10-25 [モスカード／Value Card ― 電子マネー基盤からカード番号・PINが流出](posts/2026-10-25-mos-card-valuedesign-value-card-id-pin-balance-1-42m.md)
- 2026-10-25 [パナソニック ― 禁止の生成AIに従業員の個人情報をアップロード](posts/2026-10-25-panasonic-hr-project-prohibited-genai-upload-334k.md)
- 2026-10-24 [アンドエスティHD ― サーバーに侵入され顧客情報漏えいのおそれ](posts/2026-10-24-andst-hd-server-intrusion-2-5m-customers.md)
- 2026-10-24 [日本ピザハット ― 決済APIに不正アクセス、顧客情報が漏えい](posts/2026-10-24-pizzahut-japan-payment-api-customer-data.md)
- 2026-10-24 [佐川急便 ― お荷物問い合わせサービスで送り状データ流出の可能性](posts/2026-10-24-sagawa-tracking-service-up-to-53m-records.md)
- 2026-10-24 [トレジャー・ファクトリー ― 案件管理システムに不正アクセス](posts/2026-10-24-treasure-factory-case-management-746k-emails.md)
- 2026-10-23 [カプコン「CAPCOM ID」 ― メールアドレスなどが漏えい、パスワード変更被害も](posts/2026-10-23-capcom-id-11-77m-emails-196-passwords-changed.md)
- 2026-10-23 [KOMOJU ― 非本番環境の脆弱性から加盟店のAPI認証情報が漏洩](posts/2026-10-23-komoju-non-production-vuln-merchant-api-credentials.md)
- 2026-10-23 [GETTIIS ― 公演登録サービスの脆弱性でチケットサイト会員情報流出](posts/2026-10-23-linkstation-gettiis-gettii-lite-vuln-318k-members.md)
- 2026-10-23 [ブラストメール ― APIサーバーに侵入され契約者情報が流出](posts/2026-10-23-rakus-light-cloud-blastmail-api-servers-all-customers.md)
- 2026-10-22 [イオングループ ― 各社のWebサイトで不正アクセスを検知](posts/2026-10-22-aeon-group-13-companies-42-websites-intrusion.md)
- 2026-10-22 [デジタルアーツ ― クラウド運用環境などに長期の不正アクセス痕跡](posts/2026-10-22-digital-arts-cloud-ops-credentials-intrusion-since-2025-07.md)
- 2026-10-22 [ママワークス ― 設定の脆弱性から会員名簿が流出](posts/2026-10-22-mamaworks-member-list-uploaded-police-report.md)
- 2026-10-22 [沖縄ツーリスト ― 個人情報漏えいの可能性、予約サービスを停止](posts/2026-10-22-okinawa-tourist-ots-reservation-services-suspended.md)
- 2026-10-22 [お名前.com デスクトップクラウド ― 顧客サーバーに不正プログラム](posts/2026-10-22-onamae-desktop-cloud-malicious-program-26k-servers.md)
- 2026-10-21 [アンビションDXホールディングス ― ネットワーク機器経由でランサムウェア被害](posts/2026-10-21-ambition-dx-ransomware-final-report-140k-files-580k.md)
- 2026-10-21 [アツミ電氣 DVR ― 非公開の保守用サービスでOSコマンド実行](posts/2026-10-21-atsumi-adx-dvr-hidden-maintenance-services-jvn88864366.md)
- 2026-10-21 [岩井コスモ証券 ― 委託先の設定不備で情報漏洩と不正な売買注文](posts/2026-10-21-iwai-cosmo-tradeworks-admin-function-unauthorized-trades.md)
- 2026-10-21 [住宅省エネ2024キャンペーン ― 事務局システムに不正操作、全機能停止](posts/2026-10-21-jutaku-shoene-2024-hakuhodo-subsidy-system-23k.md)
- 2026-10-21 [NEC ― 委託先が攻撃され顧客のサーバーが暗号化](posts/2026-10-21-nec-subcontractor-credentials-customer-servers-encrypted.md)
- 2026-10-20 [クリプトン ― 音源販売サイトに不正アクセス、会員情報流出の可能性](posts/2026-10-20-crypton-sonicwire-d2r-420k-hashed-passwords.md)
- 2026-10-20 [ふるさとチョイス ― 不正アクセスの疑いでサービス停止](posts/2026-10-20-furusato-choice-trustbank-suspected-intrusion-services-halted.md)
- 2026-10-20 [阪急阪神百貨店 ― 予約サイト経由で顧客管理システムに不正アクセス](posts/2026-10-20-h2o-hankyu-hanshin-dept-reservation-site-h2o-id-1-26m.md)
- 2026-10-20 [ニフティ ― 回線申込の管理システムに不正アクセス](posts/2026-10-20-nifty-line-application-admin-tool-542k.md)
- 2026-10-20 [ユミルリンク「Cuenote FC」 ― サポート担当者の認証情報を窃取され漏洩](posts/2026-10-20-ymirlink-cuenote-fc-support-credentials-9m.md)
- 2026-10-19 [足利市斎場予約システム ― 委託先のシステムに不正アクセス](posts/2026-10-19-ashikaga-funeral-hall-reservation-system-8800.md)
- 2026-10-19 [ジャパンタイムズ ― 使用終了したファイルサーバーがランサムウェア被害](posts/2026-10-19-japan-times-ransomware-retired-file-server-leak.md)
- 2026-10-19 [JFA Passport ― 不正アクセスで一部機能を停止](posts/2026-10-19-jfa-passport-app-unauthorized-access-15-hours.md)
- 2026-10-19 [リクルート「カーセンサー」 ― 不審なアクセスで全サービス停止](posts/2026-10-19-recruit-carsensor-suspicious-access-all-services-halted.md)
- 2026-10-19 [WASABI SWITCH ― EC一元管理サービスに複数経路から不正アクセス](posts/2026-10-19-wasabi-switch-ec-backoffice-repeated-intrusions-template-php.md)
- 2026-10-18 [ファンケル・アテニア ― ECサイトに不正アクセス、会員情報流出](posts/2026-10-18-fancl-attenir-ec-sites-785k-members.md)
- 2026-10-18 [日本郵便 ― 国際郵便の調査請求Web受付が乗っ取られスパム送信](posts/2026-10-18-japan-post-international-inquiry-web-service-spam-520k.md)
- 2026-10-18 [京王電鉄グループ ― ランサムウェア攻撃、Qilinが情報公開を主張](posts/2026-10-18-keio-group-ransomware-qilin-leak-claim.md)
- 2026-10-18 [セカンドリテイリング ― 社内システムに不正アクセス、アプリとWebを停止](posts/2026-10-18-second-retailing-geo-2ndstreet-internal-system-apps-halted.md)
- 2026-10-18 [イエローハット ― WEB作業予約システムから会員情報流出](posts/2026-10-18-yellow-hat-web-reservation-system-1-79m-second-report.md)
- 2026-10-17 [コミックシーモア ― 会員システムに不正アクセス、サービス停止](posts/2026-10-17-comic-cmoa-member-system-hashed-passwords.md)
- 2026-10-17 [Eストアー「ショップサーブ」 ― アプリの脆弱性からDB情報が流出](posts/2026-10-17-estore-shopserve-final-report-23-35m.md)
- 2026-10-17 [Studio ― クラウド環境に不正アクセス、APIキー流出の可能性](posts/2026-10-17-studio-cloud-environment-all-users-api-keys.md)
- 2026-10-16 [ビューティガレージ ― ECサイトから顧客情報とパスワードハッシュ流出](posts/2026-10-16-beauty-garage-ec-775k-password-hashes.md)
- 2026-10-16 [バーガーキング公式アプリ ― 会員情報管理システムから情報漏えい](posts/2026-10-16-burger-king-app-member-system-11-18m.md)
- 2026-10-16 [メドレー「アットリンク」 ― 産婦人科向けシステムに不正アクセス](posts/2026-10-16-medley-atlink-obgyn-system-787-institutions.md)
- 2026-10-16 [ソースネクスト ― 会員情報取得APIの不正利用で情報流出](posts/2026-10-16-sourcenext-member-api-22-5m.md)
- 2026-10-15 [アエナ公式通販アプリ ― 機械的な連続アクセスで会員情報が閲覧された](posts/2026-10-15-aena-ec-app-mypage-817k-members.md)
- 2026-10-15 [EC-CUBE AmazonPayプラグイン ― 管理者を登録される脆弱性が悪用](posts/2026-10-15-ec-cube-amazonpay-plugin-cve-2026-103671-admin-account.md)
- 2026-10-15 [SiteGuard Server Edition ― 統計機能のOSコマンド注入が悪用](posts/2026-10-15-siteguard-server-edition-cve-2026-106931-stats-os-command.md)
- 2026-10-14 [SpeeCAN RAIDEN ― 自治体の防災メール配信基盤に不正アクセス](posts/2026-10-14-arcadia-speecan-raiden-municipal-disaster-mail-3-13m.md)
- 2026-10-14 [DCM「マイボ」 ― 注意喚起後のログ点検で不正アクセスが判明](posts/2026-10-14-dcm-mybo-member-system-419-found-after-alert.md)
- 2026-10-14 [ライドオンエクスプレス ― サーバー運営会社がランサムウェア被害](posts/2026-10-14-rideon-express-ginnosara-server-operator-ransomware-6-5m.md)
- 2026-10-13 [あっぷらぼ ― 設定不備でメールサーバのDB管理用パスワード突破](posts/2026-10-13-applabo-mail-server-db-admin-password-exposed-path.md)
- 2026-10-13 [ココナラスキルマーケット ― 遮断後に再侵入、履歴書などが流出](posts/2026-10-13-coconala-skill-market-resumes-2294-reintrusion.md)
- 2026-10-13 [リゾートトラスト ― Webサイトの異常な作動で会員・予約者情報漏洩](posts/2026-10-13-resorttrust-website-kahala-yokohama-62k-records.md)
- 2026-10-12 [バイトル（ディップ） ― 仕様の不備を突かれメールアドレス漏えい](posts/2026-10-12-baitoru-dip-spec-flaw-3-88m-email-addresses.md)
- 2026-10-12 [NewsPicks ― 管理ツールの脆弱性から会員情報漏えいの可能性](posts/2026-10-12-newspicks-admin-tool-vulnerability-323k-emails.md)
- 2026-10-12 [TEMAIRAZU（手間いらず） ― 宿泊予約の連携システムに不正アクセス](posts/2026-10-12-temairazu-site-controller-4-45m-guests-phishing.md)
- 2026-10-11 [ブックオフ ― 子会社の会員管理システムに不正アクセス](posts/2026-10-11-bookoff-member-system-6-43m-records.md)
- 2026-10-11 [相次ぐ不正アクセスにJPCERT/CC・NCO・IPAが一斉に注意喚起](posts/2026-10-11-jpcert-nco-ipa-alerts-domestic-breach-wave.md)
- 2026-10-11 [skyticket ― 経路の違う3件の不正アクセスで情報流出](posts/2026-10-11-skyticket-adventure-three-intrusions-14-64m.md)
- 2026-10-10 [コミューン ― 共通の署名鍵を奪われ、会員情報が漏えい](posts/2026-10-10-commune-community-platform-signing-key-307k-members.md)
- 2026-10-10 [第一興商 ― 委託先PCのマルウェア感染で会員情報漏えいのおそれ](posts/2026-10-10-daiichikosho-big-echo-vendor-pc-malware-8-72m.md)
- 2026-10-10 [ローソンID ― アプリの表示の仕組みが悪用され情報漏えい](posts/2026-10-10-lawson-id-app-display-mechanism-2-15m-records.md)
- 2026-10-09 [HIS ― タイ現地法人からパスポート情報流出の可能性](posts/2026-10-09-his-thailand-subsidiary-file-server-passport-627.md)
- 2026-10-09 [修道学園 ― サーバーに不正アクセス、口座情報などが漏えいのおそれ](posts/2026-10-09-shudo-gakuen-server-bank-account-info.md)
- 2026-10-09 [戸田建設 ― 支払管理システムから取引先・従業員の情報が流出](posts/2026-10-09-toda-corporation-payment-system-supplier-employee-data.md)
- 2026-10-08 [IDCFクラウド ― ランサムウェア攻撃で東日本リージョン1が停止](posts/2026-10-08-idcf-cloud-ransomware-east-japan-region1-495-customers.md)
- 2026-10-08 [関西国際大学 ― eポートフォリオから在籍者の記録が流出](posts/2026-10-08-kansai-university-of-international-studies-eportfolio-breach.md)
- 2026-10-08 [楽天ドライブ ― 管理用アカウントを奪われ保存データが閲覧された](posts/2026-10-08-rakuten-drive-admin-credential-stored-files-15k-accounts.md)
- 2026-10-07 [旭化成セラピューティクス ― 委託先の会員DBに不正アクセス](posts/2026-10-07-asahi-kasei-pharma-digital-vendor-breach.md)
- 2026-10-07 [GMOリサーチ＆AI「infoQ」 ― 会員情報流出とポイント不正交換](posts/2026-10-07-gmo-research-infoq-948k-members-point-fraud.md)
- 2026-10-07 [ミスターマックス ― アプリと通販に不正アクセス、会員情報流出](posts/2026-10-07-mrmax-app-online-store-1-73m-members.md)
- 2026-10-06 [大和証券 ― 問い合わせ管理の委託先に不正アクセス](posts/2026-10-06-daiwa-securities-scala-inquiry-service-breach.md)
- 2026-10-06 [大阪公立大学 ― 仮想化基盤が狙われサーバー停止、バックアップも暗号化](posts/2026-10-06-osaka-metropolitan-university-ransomware-500-servers.md)
- 2026-10-06 [焼肉きんぐ公式アプリ ― ほぼ全会員分の情報が流出](posts/2026-10-06-yakiniku-king-app-10-7m-members-breach.md)
- 2026-10-05 [池上通信機 ― ランサムウェアでファイル暗号化、リークサイトに公開](posts/2026-10-05-ikegami-tsushinki-ransomware-leak-site.md)
- 2026-10-05 [日本経済新聞社 ― 社員のMicrosoft 365からなりすましメール](posts/2026-10-05-nikkei-m365-google-workspace-account-takeover.md)
- 2026-10-05 [タイムズカー ― 会員情報と本人確認書類の画像が流出](posts/2026-10-05-timescar-web-system-6-6m-accounts-id-documents.md)
- 2026-10-04 [アバハウス ― 不審な返金メール報告から発覚、会員・受注DBへの不正アクセス](posts/2026-10-04-abahouse-member-order-database-breach.md)
- 2026-10-04 [第一生命 ― 人事システムに不正アクセス、従業員情報流出の可能性](posts/2026-10-04-dai-ichi-life-hr-system-employee-data-breach.md)
- 2026-10-04 [ヤマト運輸 クロネコ代金後払い ― 顧客情報の持ち出しを確定](posts/2026-10-04-yamato-kuroneko-pay-later-data-breach.md)
- 2026-10-02 [セイコーマートアプリ ― 不正アクセスで会員情報が閲覧された](posts/2026-10-02-seicomart-app-member-data-breach.md)
- 2026-10-02 [集英社 HAPPY PLUS COMMUNITY ― CMS設定不備から情報漏えい](posts/2026-10-02-shueisha-happy-plus-community-breach.md)
- 2026-10-02 [吉野家HD／ApplyNow ― 契約終了後も残った応募者データが漏えい](posts/2026-10-02-yoshinoya-applynow-applicant-data-breach.md)
<!-- posts:domestic:end -->

### 海外（国際面）

公開日の新しい順。

<!-- posts:overseas:start -->
- 2026-10-29 [Alpine Linux ― 自前GitLabにRCE攻撃、侵害を前提に再構築](posts/2026-10-29-alpine-linux-gitlab-cve-2026-97229-exploit-attempt-rebuild.md)
- 2026-10-29 [Oracle PeopleSoft ― 悪用中のRCEは3つの脆弱性の連鎖と判明](posts/2026-10-29-oracle-peoplesoft-cve-2026-35273-three-chained-flaws.md)
- 2026-10-29 [Volt Typhoon ― 使い捨て中継網で管理基盤のゼロデイを悪用](posts/2026-10-29-volt-typhoon-silent-train-ephemeral-relay-zero-days.md)
- 2026-10-28 [Convertr ― 分析スクリプト改ざんで決済画面にスキマー](posts/2026-10-28-convertr-plausible-tracker-skimmer-brazil-checkouts.md)
- 2026-10-28 [Keystone ― 公式サイト侵害で端末の真正性確認鍵が流出](posts/2026-10-28-keystone-website-breach-device-auth-key-18835-destroyed.md)
- 2026-10-27 [Gheist ― 盗んだGitHubトークンでActionsのシークレットを回収](posts/2026-10-27-gheist-stolen-github-tokens-actions-log-secret-dump.md)
- 2026-10-27 [Magento ― CMSブロックにローダーを埋め込む攻撃](posts/2026-10-27-magento-cms-block-loader-deepveindrilling-953-stores.md)
- 2026-10-26 [Downloadsの AGENTS.md ― コーディングエージェントを乗っ取る](posts/2026-10-26-agents-md-downloads-folder-ai-coding-agent-hijack.md)
- 2026-10-26 [Tailworm ― Tailscale SSHなどのソケット転送でroot、未修正](posts/2026-10-26-tailworm-tailscale-ssh-unix-socket-forwarding-root.md)
- 2026-10-25 [Brotli CVE-2026-111497（Node2Shell） ― 圧縮処理の欠陥でRCE](posts/2026-10-25-brotli-cve-2026-111497-node2shell-decoder-oob-write.md)
- 2026-10-25 [Time4Popcorn ― 放置されたアップデーターのドメインが失効](posts/2026-10-25-time4popcorn-abandoned-updater-domains-operation-ixim.md)
- 2026-10-24 [INC・The Gentlemen系 ― 「AIが実行し人が承認する」侵入](posts/2026-10-24-inc-gentlemen-affiliates-phantom-ai-opencode-exposed-servers.md)
- 2026-10-24 [MythicRatatoskr ― C2をYggdrasil網に隠すバックドアとデータ消去](posts/2026-10-24-mythicratatoskr-yggdrasil-uac-0099-sandworm-wiper.md)
- 2026-10-24 [Railway ― ビルド基盤から環境変数の秘密情報が流出](posts/2026-10-24-railway-build-infrastructure-env-vars-ai-keys-distillation.md)
- 2026-10-23 [APT41「BlackX」 ― パッチ済みでもSecure Bootを破るブートキット](posts/2026-10-23-apt41-blackx-uefi-bootkit-baton-drop-secure-boot-revocation.md)
- 2026-10-23 [VeloCloud Orchestrator ― SQLインジェクションで権限昇格、悪用続く](posts/2026-10-23-velocloud-orchestrator-cve-2026-114625-read-only-to-superuser-sqli.md)
- 2026-10-22 [LiteLLM 1.107.0 ― リリース工程を乗っ取りバックドア混入](posts/2026-10-22-litellm-1-107-0-release-pipeline-hijack-lookalike-fork.md)
- 2026-10-22 [PHP2Shell ― PHP本体の認証なしRCE](posts/2026-10-22-php2shell-cve-2026-109618-109619-oom-stale-state-rce.md)
- 2026-10-21 [eMudhra 中間CA ― 秘密鍵が「256未満の整数」だった](posts/2026-10-21-emudhra-intermediate-ca-p384-private-keys-under-256.md)
- 2026-10-21 [OVHcloud CLI ― 盗まれた開発者の鍵でリリースが差し替え](posts/2026-10-21-ovhcloud-cli-release-assets-replaced-glassworm-developer-account.md)
- 2026-10-21 [UpdraftCentral ― 盗まれた署名鍵でバックドア入りプラグイン配布](posts/2026-10-21-updraftcentral-cloud-keys-stolen-signed-backdoor-plugins.md)
- 2026-10-20 [Plex2Shell ― 認証なしRCEが公開翌日に悪用](posts/2026-10-20-plex2shell-unauth-rce-cryptominer-proxyware.md)
- 2026-10-20 [Rank Math PRO ― 公式の配布物にバックドア混入](posts/2026-10-20-rank-math-pro-3-0-123-supply-chain-self-restoring-backdoor.md)
- 2026-10-20 [Siemens Software Center ― DLLサイドローディングでClickFix配布](posts/2026-10-20-siemens-software-center-cve-2026-110936-dll-sideloading-romulus.md)
- 2026-10-19 [Broadcom製Wi-Fi ― WPS処理の古い欠陥でルーターのrootに](posts/2026-10-19-broadcom-wps-eap-reassembly-overflow-forever-day-routers.md)
- 2026-10-19 [Drupal core CVE-2026-108097 ― Field UIの致命的RCE](posts/2026-10-19-drupal-field-ui-rce-cve-2026-108097-entity-list.md)
- 2026-10-19 [OpenBSD「Big Fish」 ― 37年前からの欠陥でローカルroot](posts/2026-10-19-openbsd-big-fish-shm-nattch-37-year-local-root.md)
- 2026-10-18 [ConnectWise Cloud Backup ― アプリの鍵でM365テナントに侵入](posts/2026-10-18-connectwise-cloud-backup-skykick-m365-app-credential-abuse.md)
- 2026-10-18 [npm「imgdecode」 ― require()だけでシェルコードを取得する悪性パッケージ](posts/2026-10-18-malfex-npm-imgdecode-native-addon-shellcode-loader.md)
- 2026-10-18 [OpenAIの研究モデル ― データ収集中に他組織のシステムに侵入](posts/2026-10-18-openai-misalignment-reports-agent-broke-into-third-party-systems.md)
- 2026-10-17 [AOMEI Backupper ― 更新サーバー改ざんでバックドア配布](posts/2026-10-17-aomei-backupper-ephemeral-update-server-tampering-unc7017.md)
- 2026-10-17 [BeyondTrust Remote Support ― ゼロデイで遠隔サポート装置を奪取](posts/2026-10-17-beyondtrust-remote-support-cve-2026-102764-armory-castle-zero-day.md)
- 2026-10-17 [FortiOS／PEERSTITCH ― FortiGateの設定と鍵をFortiManager経由で窃取](posts/2026-10-17-fortios-cve-2025-61624-peerstitch-fortimanager-500-firewalls.md)
- 2026-10-16 [AdFection ― 広告配信経由でAl JazeeraにCandiruのスパイウェア](posts/2026-10-16-citizen-lab-discover-tech-adfection-candiru-al-jazeera.md)
- 2026-10-16 [Linuxカーネル PwnEscape ― ゲストからホストのメモリが漏れる](posts/2026-10-16-linux-kernel-pwnescape-cve-2026-99999-guest-to-host-checksum.md)
- 2026-10-16 [PAN-OS CVE-2026-0322 ― 管理画面のコードインジェクションが悪用](posts/2026-10-16-pan-os-cve-2026-0322-management-interface-authenticated-rce.md)
- 2026-10-15 [Cisco Secure Email Gateway ― 添付ファイル1通でroot、ゼロデイ悪用](posts/2026-10-15-cisco-secure-email-gateway-cve-2026-76519-amp-attachment-file-write.md)
- 2026-10-15 [Microsoft 10月月例更新 ― MotW回避のWindows Shellの欠陥が悪用](posts/2026-10-15-microsoft-october-2026-patch-tuesday-cve-2026-96951-motw-bypass.md)
- 2026-10-15 [Nextcloud Collabora CODE ― proxy.php経由でWebシェル設置](posts/2026-10-15-nextcloud-collabora-richdocumentscode-cve-2026-110447-proxy-php-rce.md)
- 2026-10-14 [Docker Hub「GhostPat」 ― 自分のトークンが他人として通る欠陥](posts/2026-10-14-docker-hub-ghostpat-cve-2026-105445-pat-transfer.md)
- 2026-10-14 [Ivanti Connect Secure ― 3つのゼロデイ連鎖で認証回避からroot](posts/2026-10-14-ivanti-connect-secure-cve-2026-104935-zero-day-chain-uta0576.md)
- 2026-10-14 [npm Trusted Publishing「SlugFest」 ― 他人のパッケージを公開できた](posts/2026-10-14-npm-trusted-publishing-slugfest-repository-slug-reclaim.md)
- 2026-10-13 [Bricksforge CVE-2026-85097 ― WordPressフォームの認証なしRCE悪用](posts/2026-10-13-bricksforge-cve-2026-85097-polyglot-upload-rce.md)
- 2026-10-13 [仏スーパーの冷凍設備に強制霜取り ― Danfoss製管理装置が標的](posts/2026-10-13-danfoss-ak-sm-refrigeration-french-supermarkets-forced-defrost.md)
- 2026-10-13 [GitLab CVE-2026-97229 ― CI/CDの正規表現処理で認証なしRCE](posts/2026-10-13-gitlab-cve-2026-97229-cicd-regex-compiler-unauth-rce.md)
- 2026-10-12 [Ledger端末 ― 正規リセラー経由でハードウェアインプラント混入](posts/2026-10-12-ledger-cryptobilis-hardware-implant-southeast-asia.md)
- 2026-10-12 [P7 DarkSword ― 漏洩iOSエクスプロイトキットで暗号資産を窃取](posts/2026-10-12-p7-darksword-ios-exploit-kit-wallet-theft.md)
- 2026-10-12 [XRP Ledger ― 支払いエンジンの整数オーバーフローで大量鋳造が可能に](posts/2026-10-12-xrpl-payment-engine-xrp-overflow-infinite-mint.md)
- 2026-10-11 [韓国の金融機関に連続侵入 ― AI自動ペネトレーションツールを悪用](posts/2026-10-11-artex-ai-pentest-tool-south-korea-financial-breaches.md)
- 2026-10-11 [Chromium ― 国際化ドメインの偽装が本物そっくりに表示される](posts/2026-10-11-chromium-idn-homograph-cyrillic-oe-latin-k-hook.md)
- 2026-10-11 [GhostAction再来 ― 偽「Security Audit」ワークフローで鍵を窃取](posts/2026-10-11-ghostaction-github-actions-security-audit-git-history.md)
- 2026-10-10 [AhsayCBS ― 認証回避とコマンド注入でバックアップ管理コンソール奪取](posts/2026-10-10-ahsaycbs-cve-2026-105133-105134-xmrig-webshell.md)
- 2026-10-10 [AnyDesk Linux「AnyPwn」 ― 認証前rootの攻撃コードが公開](posts/2026-10-10-anydesk-linux-anypwn-heap-overflow-preauth-rce.md)
- 2026-10-10 [Citrix NetScaler CVE-2026-107406 ― SAML処理の欠陥でRCEのおそれ](posts/2026-10-10-netscaler-saml-cve-2026-107406-memory-overflow-rce.md)
- 2026-10-09 [Cisco NX-OS CVE-2026-76465 ― MPLS OAMの検証不備で認証なしroot](posts/2026-10-09-cisco-nxos-cve-2026-76465-mpls-oam-rce.md)
- 2026-10-09 [Splunk Enterprise CVE-2026-76268 ― 認証なしのAPIからコマンド実行](posts/2026-10-09-splunk-cve-2026-76268-patroni-rest-api.md)
- 2026-10-09 [tensorlake npm ― 正規リポジトリからShai-Huludワームが配布](posts/2026-10-09-tensorlake-npm-shai-hulud-hostage-token.md)
- 2026-10-08 [ccTLD乗っ取り ― 国別ドメインのDNSを書き換え正規証明書を取得](posts/2026-10-08-cctld-registry-hijack-gh-sl-as-google-certificates.md)
- 2026-10-08 [FortiBleed ― 使い回された認証情報でFortiGate乗っ取り](posts/2026-10-08-fortibleed-fbi-usss-fortigate-admin-lockout.md)
- 2026-10-08 [SonicWall SMA1000 CVE-2026-102255 ― ログイン前に届くSSRF](posts/2026-10-08-sonicwall-sma1000-cve-2026-102255-preauth-ssrf.md)
- 2026-10-07 [Atlassian Data Center CVE-2026-21589 ― ログインなしでファイル読み取り](posts/2026-10-07-atlassian-data-center-cve-2026-21589-file-access.md)
- 2026-10-07 [LibreOffice／OpenOffice ― 表計算ファイルを開くだけでJavaコード実行](posts/2026-10-07-libreoffice-openoffice-jdbc-classpath-rce.md)
- 2026-10-07 [Ninja Forms／WPC Product Bundles ― 蓄積型XSSで隠し管理者作成](posts/2026-10-07-wordpress-ninja-forms-wpc-stored-xss-hidden-admin.md)
- 2026-10-06 [Cling ― STUN通信に命令を紛れ込ませるIoTボットネット](posts/2026-10-06-cling-clingstun-stun-c2-iot-botnet.md)
- 2026-10-06 [デンマーク CPR ― 正規の照会権限が悪用され住民情報が流出](posts/2026-10-06-denmark-cpr-registry-8-8m-lawful-access-abuse.md)
- 2026-10-06 [Exchange Server CVE-2026-96940 ― 他人のメールボックスを読める欠陥](posts/2026-10-06-exchange-cve-2026-96940-mailbox-access.md)
- 2026-10-05 [GitLab AI Gateway CVE-2026-90970 ― サンドボックスを破るコマンド実行](posts/2026-10-05-gitlab-ai-gateway-cve-2026-90970-template-sandbox.md)
- 2026-10-05 [Citrix NetScaler CVE-2026-88779 ― SAML処理のDoSが悪用された](posts/2026-10-05-netscaler-saml-cve-2026-88779-reboot-trigger.md)
- 2026-10-05 [TA419 ― AI政策の専門家を狙うAitMフィッシング](posts/2026-10-05-ta419-ai-policy-aitm-frameless-bitb.md)
- 2026-10-04 [Dell CSM CVE-2026-63688ほか ― 認証なしでストレージ管理者権限](posts/2026-10-04-dell-csm-cve-2026-63688-authorization-flaws.md)
- 2026-10-04 [Rejetto HFS CVE-2026-61500 ― 推測できる署名鍵、公開後すぐ悪用](posts/2026-10-04-rejetto-hfs-cve-2026-61500-mythos-math-random.md)
- 2026-10-04 [Zammad CVE-2026-102489／102490 ― ゼロデイ連鎖でrootまで](posts/2026-10-04-zammad-cve-2026-102489-102490-divd-ai-agent.md)
- 2026-10-02 [FortiMail CVE-2026-104286 ― 管理GUIの任意ファイル書き込み](posts/2026-10-02-fortimail-cve-2026-104286.md)
- 2026-10-02 [Star Blizzard ― ClickFixからCosmicPulseを入れる諜報攻撃](posts/2026-10-02-star-blizzard-redflick-cosmicpulse.md)
- 2026-10-02 [Warlock ― SharePoint侵入からドメイン全体にランサムウェア](posts/2026-10-02-warlock-longlegs-sharepoint-sysvol.md)
- 2026-10-01 [Bitget ― セキュリティ製品を踏み台にウォレットから資金流出](posts/2026-10-01-bitget-387m-heist-security-appliance-zero-day.md)
- 2026-10-01 [Cisco SD-WAN Manager CVE-2026-76504 ― 認証回避ゼロデイ](posts/2026-10-01-cisco-sdwan-manager-cve-2026-76504.md)
- 2026-10-01 [Citrix NetScaler CVE-2026-88772/88771 ― DTLS処理の欠陥が悪用](posts/2026-10-01-citrix-netscaler-cve-2026-88772-88771.md)
- 2026-10-01 [Zimbra CVE-2026-73570 ― SMTP経由でシェル、公表前の隙間に悪用](posts/2026-10-01-zimbra-snmp-cve-2026-73570.md)
<!-- posts:overseas:end -->

### 脆弱性（注意報）

公開日の新しい順。

<!-- posts:vuln:start -->
- 2026-10-27 [Wasmtime ― Cranelift の欠陥でWasmのサンドボックスを抜けられる](posts/2026-10-27-wasmtime-cranelift-cve-2026-115889-115893-sandbox-escape.md)
- 2026-10-25 [HPE Aruba AOS-8／AOS-10 ― 認証なしRCEの欠陥が8件](posts/2026-10-25-hpe-aruba-aos-8-aos-10-eight-cvss10-cve-2026-79844.md)
- 2026-10-25 [Pillow 13.0.0 ― 画像を開くだけでコード実行に至る欠陥を修正](posts/2026-10-25-pillow-13-0-0-critical-fpx-mpo-eps-rce-fixes.md)
- 2026-10-23 [GitLab CVE-2026-110264 ― .orgファイル表示で認証なしRCE](posts/2026-10-23-gitlab-cve-2026-110264-org-mode-onigmo-rce.md)
- 2026-10-23 [プリザンター CVE-2026-113438 ― LDAP認証でパスワードなしログイン](posts/2026-10-23-pleasanter-ldap-auth-bypass-cve-2026-113438.md)
<!-- posts:vuln:end -->

## 記事の書き方

記事は `posts/` にMarkdownで置きます（ファイル名は `YYYY-MM-DD-内容がわかる英数字.md`）。サイトは国内の記事を「社会面」、海外の記事を「国際面」、旬の脆弱性の記事を「注意報（脆弱性）」として分けて表示します。

### front matter

```yaml
---
title: "主語 ― 何が起きたか" # 40字前後まで。「 ― 」の後ろは記事ページで副見出しとして表示
date: 2026-10-01 # 公開日（必須）
updated: 2026-10-03 # 更新日（任意。続報を追記したら更新。並び順は変わらない）
region: domestic # domestic（国内）| overseas（海外）| vuln（脆弱性）。省略時は overseas
status: ongoing # 国内向け・任意：ongoing（続報待ち）| concluded（確定）
issue: 12 # 国内向け・任意：続報を追跡するGitHub Issue番号
tags: [組織名, 不正アクセス, 個人情報漏えい] # 1つ目は一覧で目立たせるラベル。docs/tagging.md の表記に合わせる
description: 一覧に出す要約。件数・被害範囲・手口はタイトルではなくここに書く
---
```

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `title` | ○ | 記事タイトル。「主語 ― 何が起きたか」を40字前後で。件数・被害範囲・手口の詳細は `description` へ（[docs/tagging.md](docs/tagging.md)） |
| `date` | ○ | 公開日 |
| `tags` | | タグの配列。1つ目は一覧で目立たせるラベル。一般的なタグは [docs/tagging.md](docs/tagging.md) の表記を使い、分類（攻撃手法・対象技術・インシデント種別）のタグ絞り込みとタグページ（`/security-notes/tags/`）に反映される。固有名詞・CVE番号は自由に付けてよい |
| `region` | | `domestic`（国内）・`overseas`（海外）・`vuln`（脆弱性）のいずれか。省略すると `overseas` 扱いだが、明記を推奨 |
| `updated` | | 更新日。公開日より新しいと一覧に「公開 / 更新」の両方の日付と「続報あり」（国内）/「更新」（海外）の印が付く。並び順は公開日のまま |
| `status` | | 国内向け。`ongoing` は「続報待ち」、`concluded` は「確定」として記事ヘッダーに表示。`ongoing` は一覧にも「続報待ち」の印が付く |
| `issue` | | 国内向け。追跡用GitHub Issueの番号。記事ヘッダーにIssueへのリンクを出す |
| `description` | | 一覧・メタ情報・RSSに使う要約。タイトルから外した件数・被害範囲・手口もここに書く |

- 記事一覧は「すべて」「国内」「海外」「脆弱性」の4つのタブで切り替えます。タブはそれぞれ別のURLを持つページです。

  | タブ | URL | 並び順 |
  | --- | --- | --- |
  | すべて | `/security-notes/` | 公開日の新しい順（各記事に国内/海外/脆弱性の別を表示） |
  | 国内（社会面） | `/security-notes/domestic/` | 公開日の新しい順 |
  | 海外（国際面） | `/security-notes/overseas/` | 公開日の新しい順 |
  | 脆弱性（注意報） | `/security-notes/vuln/` | 公開日の新しい順 |
  | タグ | `/security-notes/tags/` | 分類タグごとに全タブの記事を公開日の新しい順 |

- どの一覧も並び順は公開日（`date`）で、表示する日付も「公開 YYYY.MM.DD」です。`updated` がある記事には「更新 YYYY.MM.DD」を併記します。RSSも公開日順・公開日を `pubDate` にしています。
- 一覧の各記事は「タイトル → 要約 → 日付・面・印・タグ・読了時間」の順に表示します。

- 検索・タグ絞り込みは表示中のタブの記事を絞り込み、他の面にも該当があれば「他の面にも N件 → すべての記事で探す」を表示します。「すべて」タブは全記事が対象で、`?q=キーワード&tag=タグ` で条件付きのURLを開けます。記事が0本のタブでは「準備中」と表示します。
- タグ絞り込みは「攻撃手法」「対象技術」「インシデント種別」に分けて、そのタブに該当記事があるタグだけを件数付きで表示します。分類と付け方は [docs/tagging.md](docs/tagging.md) を参照してください。
- 記事ページのタグは、分類タグならタグページへ、固有名詞などは全記事のキーワード検索へリンクします。
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
2. front matter の `updated` を続報の日付に更新する。一覧に更新日と「続報あり」の印が付く（並び順は公開日のままで、上位には移動しない）。
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

記事の `title`、`date`、`tags`、`region` などを一覧・記事ヘッダーに使用します（項目は「記事の書き方」を参照）。説明がない記事では冒頭の箇条書きを一覧の要約に使います。検索はタイトル・タグ・分類タグ・要約を対象にします。

- `npm run readme`: このREADMEの記事一覧（`<!-- posts:… -->` の間）を `posts/` から作り直す（公開日の新しい順）

デザインは生成り色の紙面と墨色を基調に、明朝体の見出しと細い罫線を使った新聞風です。本文と操作部分は読みやすいゴシック体にしています。トップはヒーローを設けず、紙面タブ（すべて / 国内 / 海外 / 脆弱性）・記事一覧・検索・タグ絞り込みをすぐ使える構成です。記事ページは冒頭の要点枠、自動目次、事実・考察のラベル、横スクロール対応の表とMermaid図を備えています。

RSSフィードは `/security-notes/rss.xml` に生成されます。

公開先: https://color4pen.github.io/security-notes/

`main` にプッシュすると、GitHub Actionsがチェック・ビルドを実行し、成功したサイトをGitHub Pagesへ公開します。手動実行はActionsの「Deploy GitHub Pages」から行えます。`site` と `base` は `astro.config.mjs`、公開処理は `.github/workflows/pages.yml` に設定しています。ローカル開発にはNode.js 24を推奨します。
