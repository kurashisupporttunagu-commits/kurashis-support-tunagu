# 暮らしサポート・つなぐ Webサイト

GitHubでコードを管理し、Netlify無料プランで公開する静的Webサイトです。取得済みの独自ドメイン `kurashisupport.jp` をNetlifyへ接続する構成です。

## 推奨構成と費用

| 項目 | 推奨 | 費用の目安 |
|---|---|---|
| コード管理 | GitHub | 無料 |
| Web公開 | Netlify Free | 月額0円 |
| 問い合わせ | Netlify Forms | Credit-basedプランでは送信無料・無制限 |
| SSL証明書 | Netlify自動発行 | 無料 |
| 独自ドメイン | お名前.comで取得済み | `kurashisupport.jp` |

Netlify無料プランは月300クレジットです。小規模な地域事業サイトなら開始用途として十分な可能性が高いですが、アクセス・ビルド・通信量は管理画面で確認してください。

## 収録ページ

- `site/index.html`：トップページ
- `site/painting.html`：外壁・屋根塗装
- `site/life-support.html`：暮らしサポート
- `site/operator.html`：事業者情報
- `site/contact.html`：Netlify Forms問い合わせフォーム
- `site/thanks.html`：送信完了ページ
- `site/privacy.html`：プライバシーポリシー
- `site/404.html`：ページが見つからない場合

協力職人・協力業者の募集ページ、応募フォーム、求人SEOはありません。

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

## 3. 独自ドメインをNetlifyへ接続

1. Netlifyの対象サイトで `Domain management` を開きます。
2. `Add a domain you already own` を選び、取得したドメインを入力します。
3. Netlifyに表示されるDNSレコードを確認します。
4. Netlify DNSを使う場合は、Netlifyに表示される4つのネームサーバーを控えます。
5. お名前.com Naviの「ネームサーバーの設定」から、対象ドメインをNetlify指定のネームサーバーへ変更します。
6. NetlifyでDNS確認とSSL証明書の発行を待ちます。
7. `https://kurashisupport.jp/` と `https://www.kurashisupport.jp/` の両方を確認します。

お名前.comのDNSをそのまま使う場合は、Netlifyの画面に表示されたA/CNAMEレコードをお名前.comのDNS設定へ登録します。画面に表示された値を優先してください。

Netlifyは独自ドメイン追加後、Let's EncryptのSSL証明書を自動発行・更新します。

## 4. 独自ドメインとSEO設定

正式URLは `https://kurashisupport.jp/` です。`sitemap.xml`、`robots.txt`、各ページのcanonical URLは設定済みです。

独自ドメイン接続後に、Google Search Consoleへドメインを登録し、次のサイトマップを送信してください。

```text
https://kurashisupport.jp/sitemap.xml
```

GoogleビジネスプロフィールのWebサイトURLも `https://kurashisupport.jp/` に設定します。

## 5. 写真について

トップページと塗装ページに、外壁塗装、刷毛作業、写真・見積書相談のイメージ画像を3点使用しています。画像はHTML内へ埋め込んでいるため、画像ファイルを別にアップロードする必要はありません。実際の施工事例ではないため、画面上にも「作業イメージ」「相談イメージ」と表示しています。

実際の施工写真が用意できたら、掲載許可と個人情報の写り込みを確認したうえで順次置き換えてください。

## 6. 公開前チェック

1. LINEボタンが公式アカウントを開くか
2. 電話リンクが正しい番号へ発信するか
3. Netlify Formsでテスト送信できるか
4. 添付合計8MB以内で写真と見積書が届くか
5. Gmailへの新規送信通知が届くか
6. スマートフォンで固定CTAが本文を隠さないか
7. 未確定の料金、保証、施工件数を掲載していないか
8. 画像3点に「作業イメージ」「相談イメージ」の表記があるか
9. 独自ドメインのHTTPSとwww転送を確認したか

## 公式資料

- Netlify料金：https://www.netlify.com/pricing/
- Netlify Forms：https://docs.netlify.com/manage/forms/setup/
- 独自ドメイン：https://docs.netlify.com/manage/domains/get-started-with-domains/
- HTTPS：https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/
- お名前.com：https://www.onamae.com/
