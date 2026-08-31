# 暮らしサポート・つなぐ Webサイト

GitHubでコードを管理し、Netlify無料プランで公開する静的Webサイトです。独自ドメインはCloudflare Registrarで取得し、Netlifyへ接続する構成を推奨します。

## 推奨構成と費用

| 項目 | 推奨 | 費用の目安 |
|---|---|---|
| コード管理 | GitHub | 無料 |
| Web公開 | Netlify Free | 月額0円 |
| 問い合わせ | Netlify Forms | Credit-basedプランでは送信無料・無制限 |
| SSL証明書 | Netlify自動発行 | 無料 |
| 独自ドメイン | Cloudflare Registrarの`.com` | 年10〜12米ドル程度が一般的。為替・レジストリ価格により変動 |

Netlify無料プランは月300クレジットです。小規模な地域事業サイトなら開始用途として十分な可能性が高いですが、アクセス・ビルド・通信量は管理画面で確認してください。

Cloudflare Registrarは登録・更新とも原価で、更新時の上乗せがありません。購入時に初年度だけでなく更新価格も確認してください。

## 収録ページ

- `site/index.html`：トップページ
- `site/painting.html`：外壁・屋根塗装
- `site/life-support.html`：暮らしサポート
- `site/operator.html`：事業者情報
- `site/contact.html`：Netlify Forms問い合わせフォーム
- `site/thanks.html`：送信完了ページ
- `site/privacy.html`：プライバシーポリシー
- `site/404.html`：ページが見つからない場合

協力職人・協力業者の募集ページ、応募フォーム、求人SEOはありません。連携先は手配済みという前提で、顧客向けの施工担当・責任者・工程写真の説明だけを掲載しています。

## 設定済みの連絡先

- LINE：`https://line.me/R/ti/p/@112fuvyy`
- 電話：`070-8572-8036`
- メール：`kurashisupport.tunagu@gmail.com`

LINE等を変更するときは `site/assets/config.js` を編集します。

## 問い合わせフォーム

Netlify Forms用に設定済みです。フォームにはスパム対策のhoneypotを入れています。

添付欄は次の3つです。

1. 建物全体の写真
2. 気になる箇所の写真
3. 他社の見積書

Netlify Formsは1つのファイル欄につき1ファイル、リクエスト全体で最大8MBです。スマートフォン写真が大きい場合は、画像サイズを小さくしてもらうか、LINE送付へ案内してください。

公開後、Netlify管理画面のFormsでフォームが検出されていることを確認し、メール通知先を `kurashisupport.tunagu@gmail.com` に設定してください。実際に1件テスト送信し、添付ファイルと完了ページを確認してください。

## 1. GitHubへアップロード

1. ZIPを解凍します。
2. GitHubで新しいリポジトリを作成します。例：`kurashi-support-tsunagu`
3. GitHub Desktopで解凍後のフォルダを指定します。
4. すべてのファイルをコミットします。
5. `main` ブランチをGitHubへPushします。

GitHubのWeb画面から行う場合は、ZIPそのものではなく、解凍後の中身をアップロードしてください。

## 2. Netlify無料プランで公開

1. Netlifyへ登録・ログインします。
2. `Add new project` 又は `Import an existing project` を選びます。
3. GitHubを接続し、作成したリポジトリを選びます。
4. Production branchを `main` にします。
5. Build commandは空欄、Publish directoryは `site` にします。
6. Deployを実行します。

`netlify.toml` に同じ公開設定を入れているため、通常は自動認識されます。以後、GitHubの`main`へPushするたびNetlifyが再公開します。

最初は `任意の名前.netlify.app` という無料URLで確認してください。

## 3. 安い独自ドメインを取得

第一候補：Cloudflare Registrarで`.com`を取得。

ドメイン候補（取得可否は購入画面で確認）：

- `kurashi-tsunagu.com`
- `kurashisupport-tsunagu.com`
- `tsunagu-tochigi.com`

短さと読みやすさでは `kurashi-tsunagu.com` を推奨します。`.jp`は日本事業者らしさがありますが、一般に`.com`より取得・更新費が高くなります。

取得手順：

1. Cloudflareでアカウントを作ります。
2. Registrarから希望ドメインを検索します。
3. 初年度価格と更新価格を確認して取得します。
4. 自動更新を有効にし、二要素認証も設定します。

## 4. 独自ドメインをNetlifyへ接続

1. Netlifyの対象サイトで `Domain management` を開きます。
2. `Add a domain you already own` を選び、取得したドメインを入力します。
3. Netlifyに表示されるDNSレコードを確認します。
4. CloudflareのDNS画面で、Netlifyが指定したCNAME又はAレコードを登録します。
5. CloudflareのProxy statusは、まず `DNS only` にします。
6. NetlifyでDNS確認とSSL証明書の発行を待ちます。
7. `https://独自ドメイン` と `https://www.独自ドメイン` の両方を確認します。

Netlifyは独自ドメイン追加後、Let's EncryptのSSL証明書を自動発行・更新します。

## 5. 独自ドメイン確定後のSEO設定

1. `site/sitemap-template.xml` 内の `YOUR_SITE_URL` を実際のURLへ置換します。
2. ファイル名を `sitemap.xml` に変更します。
3. `site/robots.txt` の末尾へ次を追加します。

```text
Sitemap: https://実際のドメイン/sitemap.xml
```

4. 各HTMLへcanonical URLとOGP画像URLを設定します。
5. Google Search Consoleへドメインとサイトマップを登録します。
6. GoogleビジネスプロフィールのWebサイトURLを独自ドメインへ変更します。

ドメインが未確定の段階で、架空のcanonical URLは入れていません。

## 6. 実写真

現在のファーストビューは、架空の施工事例と誤認されない住宅イラストです。代表写真、住宅写真、工程写真が用意できたら差し替えてください。お客様宅の写真は掲載媒体ごとに許可を取ってください。

## 7. 公開前チェック

1. LINEボタンが公式アカウントを開くか
2. 電話リンクが正しい番号へ発信するか
3. Netlify Formsでテスト送信できるか
4. 添付合計8MB以内で写真と見積書が届くか
5. Gmailへの新規送信通知が届くか
6. スマートフォンで固定CTAが本文を隠さないか
7. 未確定の料金、保証、施工件数を掲載していないか
8. 許可確認前の買取・回収・運搬サービスを掲載していないか
9. 写真の掲載許可と個人情報の写り込みを確認したか
10. 独自ドメインのHTTPSとwww転送を確認したか

## 公式資料

- Netlify料金：https://www.netlify.com/pricing/
- Netlify Forms：https://docs.netlify.com/manage/forms/setup/
- 独自ドメイン：https://docs.netlify.com/manage/domains/get-started-with-domains/
- HTTPS：https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/
- Cloudflare Registrar：https://www.cloudflare.com/products/registrar/
