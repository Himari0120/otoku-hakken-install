(() => {
"use strict";
const KEY="otokuInstall.wizardProgress";
const $=id=>document.getElementById(id);
const copy={
ja:{counter:"ステップ",of:" / ",saved:"進捗をこのブラウザに保存しました。",required:"各ステップの確認項目を確認してから次へ進んでください。",resume:"保存した続きから再開できます。",next:"次へ",back:"戻る",done:"導入ガイドを終了",start:"導入を始める",resumeButton:"続きから再開する",steps:[
["GitHubを知る","GitHubは、サイトのファイルをインターネット上に保存・管理するサービスです。GitHub Pagesを使うと、そのファイルをWebサイトとして公開できます。","まずは仕組みを確認しましょう。標準の導入方法はGitHubとGitHub Pagesです。ほかのサーバーや公開方法を使う場合は、このガイドの対象外となり、ご自身で調査・設定が必要です。","GitHubとGitHub Pagesの役割を確認した"],
["アカウントを作る","GitHubを利用するには無料アカウントが必要です。すでにアカウントをお持ちの場合は、新しく作る必要はありません。","① GitHub公式サイトを開く ② Sign up（登録）を選ぶ ③ メールアドレス・パスワードなどを登録 ④ 届いた確認メールの案内に従う。ログイン情報は安全な場所に保管してください。","GitHubアカウントを作成、またはログインできた"],
["保存場所を作る","Repository（リポジトリ）は、サイトのファイルをまとめて置く専用の保存場所です。","① GitHubにログイン ② 画面の「New repository」を選ぶ ③ Repository nameにサイト用の名前を入力 ④ Publicを選択 ⑤ Create repositoryを押す。名前は英数字とハイフンがおすすめです。","自分のリポジトリを作成できた"],
["製品ファイルを登録する","おトク発見ナビの製品ファイルを、作成したリポジトリに登録します。","製品の正式な配布ZIPを入手したら、ZIPを展開して中のファイルを登録します。GitHubのリポジトリ画面で「Add file」→「Upload files」を選び、ファイルを追加して「Commit changes」を押します。※配布ZIPが提供される前に、別のファイルや仮ファイルを登録しないでください。","正式な製品ファイルを登録して保存した"],
["公開設定をする","GitHub Pagesは、リポジトリ内のファイルをWebサイトとして公開する機能です。","① リポジトリの「Settings」を開く ② 左側の「Pages」を選ぶ ③ Build and deploymentのSourceで「Deploy from a branch」を選ぶ ④ Branchで「main」、フォルダーで「/(root)」を選ぶ ⑤ Saveを押す。製品の構成により指定場所が異なる場合は、製品付属の説明を優先してください。","GitHub Pagesを設定して保存した"],
["公開を確認する","公開設定後、GitHub Pagesの画面に表示されるURLからサイトを確認します。","公開まで数分かかる場合があります。Pages画面に表示されたURLを開き、トップページが表示されるか確認してください。表示されない場合は、ファイルの置き場所・トップページのファイル名・Pagesの設定を確認します。公開URL自体はこの管理画面から変更しません。","公開URLを開いてサイトが表示された"],
["サイト名を設定する","公開するサイトの名前は、購入者が自分の好きな名前にできます。「おトク発見ナビ」は製品名であり、購入者のサイト名ではありません。","導入後、製品の管理画面にある「サイト基本設定」からサイト名を入力して保存します。サイト名は公開ページの見出しやブラウザーのタイトルなどに反映する設計です。公開URLの変更は行いません。サイト名の設定機能がまだ有効でない版では、製品の更新案内を確認してください。","自分のサイト名を決め、設定方法を確認した"]
],finish:"ここまででGitHub Pagesによる導入の流れを確認しました。この画面は手順ガイドです。GitHubへの登録・ファイルのアップロード・公開設定そのものを自動実行するものではありません。"} ,
en:{counter:"Step",of:" / ",githubSignup:"Open GitHub sign-up",pagesHelp:"Open GitHub Pages help",saved:"Progress saved in this browser.",required:"Review the checklist before continuing.",resume:"You can resume from your saved progress.",next:"Next",back:"Back",done:"Finish guide",start:"Start setup",resumeButton:"Resume setup",steps:[
["About GitHub","GitHub stores and manages website files online. GitHub Pages can publish those files as a website.","The standard installation method in this guide is GitHub with GitHub Pages. Other hosting methods are outside this guide and require your own research and setup.","I understand GitHub and GitHub Pages"],
["Create an account","A free GitHub account is required. If you already have one, simply sign in.","Open GitHub, choose Sign up, enter your email and password, and follow the email verification steps. Keep your sign-in details secure.","I created an account or signed in"],
["Create a repository","A repository is a dedicated place to store your website files.","Sign in, choose New repository, enter a repository name, select Public, and choose Create repository.","I created my repository"],
["Upload product files","Upload the official product files to the repository you created.","When the official product ZIP is provided, extract it. In your repository choose Add file, then Upload files. Add the extracted files and choose Commit changes. Do not upload placeholder files or unrelated files.","I uploaded and committed the official product files"],
["Enable GitHub Pages","GitHub Pages publishes files from your repository as a website.","Open Settings, then Pages. Under Build and deployment choose Deploy from a branch. Select main and /(root), then Save. Follow product-specific instructions if the package specifies a different folder.","I saved the GitHub Pages settings"],
["Check the published site","After publishing, GitHub Pages displays the website URL.","It may take a few minutes. Open the URL shown on the Pages screen and check that the homepage appears. If it does not, check the file location, homepage filename, and Pages settings. This dashboard does not change the URL.","I opened the URL and saw my site"],
["Choose my site name","You can choose your own public website name. OtoKu Hakken Navi is the product name, not the name every customer must use.","After installation, open Site settings in the product dashboard and save your preferred site name. The site name is intended to appear in the site heading and browser title. The public URL is not changed here. Availability depends on the product edition and release.","I chose a site name and reviewed how to set it"]
],finish:"You have reviewed the GitHub Pages installation guide. This is a guide only; it does not create your GitHub account, upload files, or publish the site automatically."},
"zh-CN":{counter:"步骤",of:" / ",githubSignup:"打开 GitHub 注册页面",pagesHelp:"打开 GitHub Pages 帮助",saved:"进度已保存在此浏览器。",required:"请先确认本步骤的检查项目。",resume:"可以从已保存的进度继续。",next:"下一步",back:"返回",done:"完成指南",start:"开始安装",resumeButton:"继续安装",steps:[
["了解 GitHub","GitHub 是在线保存和管理网站文件的服务。GitHub Pages 可以将这些文件发布为网站。","本指南的标准方式是 GitHub 与 GitHub Pages。其他服务器或发布方式不在本指南范围内，需要自行调查和设置。","已了解 GitHub 和 GitHub Pages"],
["创建账户","使用 GitHub 需要免费账户。已有账户时直接登录即可。","打开 GitHub，选择 Sign up，填写邮箱和密码，并按照验证邮件完成注册。请妥善保管登录信息。","已创建账户或成功登录"],
["创建仓库","Repository（仓库）是集中保存网站文件的位置。","登录后选择 New repository，输入仓库名称，选择 Public，再点击 Create repository。","已创建仓库"],
["上传产品文件","将正式产品文件上传到刚创建的仓库。","取得正式产品 ZIP 后先解压。在仓库中选择 Add file → Upload files，添加解压后的文件，再点击 Commit changes。请勿上传临时或无关文件。","已上传并保存正式产品文件"],
["启用 Pages","GitHub Pages 可以把仓库中的文件发布为网站。","打开 Settings → Pages。在 Build and deployment 中选择 Deploy from a branch，分支选择 main，目录选择 /(root)，然后点击 Save。如产品说明指定其他目录，请以产品说明为准。","已保存 Pages 设置"],
["确认网站已发布","发布后，Pages 页面会显示网站网址。","发布可能需要几分钟。打开 Pages 页面显示的网址，确认首页能否显示。如无法显示，请检查文件位置、首页文件名和 Pages 设置。本管理画面不会更改网址。","已打开网址并看到网站"],
["设置自己的网站名称","购买者可以自由选择公开网站名称。「おトク発見ナビ」是产品名称，并非所有购买者都必须使用的网站名称。","安装后，在产品管理画面的「网站基本设置」中输入并保存自己喜欢的名称。名称计划显示在网站标题和浏览器标题中。此处不会更改公开网址。具体功能以购买版本为准。","已决定自己的网站名称并了解设置方法"]
],finish:"已查看 GitHub Pages 安装指南。本页面仅提供操作说明，不会自动注册 GitHub、上传文件或发布网站。"},
"zh-TW":{counter:"步驟",of:" / ",githubSignup:"開啟 GitHub 註冊頁面",pagesHelp:"開啟 GitHub Pages 說明",saved:"進度已儲存在此瀏覽器。",required:"請先確認本步驟的檢查項目。",resume:"可以從已儲存的進度繼續。",next:"下一步",back:"返回",done:"完成指南",start:"開始安裝",resumeButton:"繼續安裝",steps:[
["認識 GitHub","GitHub 是線上儲存與管理網站檔案的服務。GitHub Pages 可以將這些檔案發布成網站。","本指南的標準方式是 GitHub 與 GitHub Pages。其他伺服器或發布方式不在本指南範圍內，需要自行研究與設定。","已了解 GitHub 與 GitHub Pages"],
["建立帳戶","使用 GitHub 需要免費帳戶。已有帳戶時直接登入即可。","開啟 GitHub，選擇 Sign up，填寫電子郵件與密碼，並依驗證郵件完成註冊。請妥善保管登入資訊。","已建立帳戶或成功登入"],
["建立儲存庫","Repository（儲存庫）是集中存放網站檔案的位置。","登入後選擇 New repository，輸入儲存庫名稱，選擇 Public，再點選 Create repository。","已建立儲存庫"],
["上傳產品檔案","將正式產品檔案上傳至剛建立的儲存庫。","取得正式產品 ZIP 後先解壓縮。在儲存庫中選擇 Add file → Upload files，加入解壓縮後的檔案，再點選 Commit changes。請勿上傳暫存或無關檔案。","已上傳並儲存正式產品檔案"],
["啟用 Pages","GitHub Pages 可以將儲存庫中的檔案發布成網站。","開啟 Settings → Pages。在 Build and deployment 選擇 Deploy from a branch，分支選 main，資料夾選 /(root)，再按 Save。如產品說明指定其他資料夾，請依產品說明操作。","已儲存 Pages 設定"],
["確認網站已發布","發布後，Pages 頁面會顯示網站網址。","發布可能需要幾分鐘。開啟 Pages 頁面顯示的網址，確認首頁是否正常顯示。如無法顯示，請檢查檔案位置、首頁檔名與 Pages 設定。本管理畫面不會變更網址。","已開啟網址並看到網站"],
["設定自己的網站名稱","購買者可以自由選擇公開網站名稱。「おトク発見ナビ」是產品名稱，並非所有購買者都必須使用的網站名稱。","安裝後，在產品管理畫面的「網站基本設定」輸入並儲存喜歡的名稱。名稱預計顯示於網站標題與瀏覽器標題。此處不會變更公開網址。實際功能依購買版本而定。","已決定網站名稱並了解設定方式"]
],finish:"已查看 GitHub Pages 安裝指南。本頁僅提供操作說明，不會自動註冊 GitHub、上傳檔案或發布網站。"},
ko:{counter:"단계",of:" / ",githubSignup:"GitHub 가입 페이지 열기",pagesHelp:"GitHub Pages 도움말 열기",saved:"진행 상태를 이 브라우저에 저장했습니다.",required:"계속하기 전에 이 단계의 확인 항목을 확인해 주세요.",resume:"저장된 진행 상태에서 다시 시작할 수 있습니다.",next:"다음",back:"뒤로",done:"가이드 완료",start:"설치 시작",resumeButton:"이어서 진행",steps:[
["GitHub 알아보기","GitHub는 웹사이트 파일을 온라인에 저장하고 관리하는 서비스입니다. GitHub Pages를 사용하면 파일을 웹사이트로 공개할 수 있습니다.","이 가이드의 표준 방법은 GitHub와 GitHub Pages입니다. 다른 서버나 공개 방법은 이 가이드의 범위 밖이며 직접 조사하고 설정해야 합니다.","GitHub와 GitHub Pages의 역할을 확인했습니다"],
["계정 만들기","GitHub를 사용하려면 무료 계정이 필요합니다. 이미 계정이 있다면 로그인하면 됩니다.","GitHub를 열고 Sign up을 선택한 뒤 이메일과 비밀번호를 입력하고 인증 메일의 안내를 따르세요. 로그인 정보는 안전하게 보관하세요.","계정을 만들거나 로그인했습니다"],
["저장소 만들기","Repository(저장소)는 웹사이트 파일을 모아 보관하는 공간입니다.","로그인 후 New repository를 선택하고 저장소 이름을 입력합니다. Public을 선택한 다음 Create repository를 누르세요.","저장소를 만들었습니다"],
["제품 파일 등록하기","방금 만든 저장소에 정식 제품 파일을 업로드합니다.","정식 제품 ZIP을 받은 뒤 압축을 풉니다. 저장소에서 Add file → Upload files를 선택해 압축 해제한 파일을 추가하고 Commit changes를 누르세요. 임시 파일이나 관계없는 파일은 올리지 마세요.","정식 제품 파일을 업로드하고 저장했습니다"],
["Pages 공개 설정하기","GitHub Pages는 저장소의 파일을 웹사이트로 공개하는 기능입니다.","Settings → Pages를 엽니다. Build and deployment에서 Deploy from a branch를 선택하고 Branch는 main, 폴더는 /(root)로 설정한 뒤 Save를 누릅니다. 제품 안내에서 다른 폴더를 지정하면 제품 안내를 따르세요.","Pages 설정을 저장했습니다"],
["공개 확인하기","공개 설정 후 Pages 화면에 사이트 URL이 표시됩니다.","공개까지 몇 분 걸릴 수 있습니다. Pages 화면의 URL을 열어 홈페이지가 표시되는지 확인하세요. 표시되지 않으면 파일 위치, 홈페이지 파일명, Pages 설정을 확인하세요. 이 관리 화면에서는 URL을 변경하지 않습니다.","URL을 열어 사이트를 확인했습니다"],
["사이트 이름 정하기","구매자는 공개 사이트 이름을 자유롭게 정할 수 있습니다. ‘おトク発見ナビ’는 제품 이름이며 모든 구매자가 사용할 사이트 이름은 아닙니다.","설치 후 제품 관리 화면의 ‘사이트 기본 설정’에서 원하는 이름을 입력하고 저장합니다. 사이트 제목과 브라우저 제목에 반영하도록 설계합니다. 여기서는 공개 URL을 변경하지 않습니다. 실제 제공 여부는 구매 에디션에 따릅니다.","나만의 사이트 이름을 정하고 설정 방법을 확인했습니다"]
],finish:"GitHub Pages 설치 가이드를 확인했습니다. 이 화면은 안내용이며 GitHub 가입, 파일 업로드, 사이트 공개를 자동으로 실행하지 않습니다."}
};
let lang=document.documentElement.lang||"ja";
let state={step:0,checks:{}};
const t=()=>copy[lang]||copy.ja;
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));$("saveStatus").textContent=t().saved;$("saveStatus").className="status"}catch(e){$("saveStatus").textContent="保存できませんでした。";$("saveStatus").className="status error"}}
function load(){try{const v=JSON.parse(localStorage.getItem(KEY)||"null");if(v&&typeof v.step==="number"){state={step:Math.max(0,Math.min(6,v.step)),checks:v.checks||{}};return true}}catch(e){}return false}
function render(){
 const data=t(),step=data.steps[state.step];
 $("stepTitle").textContent=step[0];$("stepDescription").textContent=step[1];
 $("stepCounter").textContent=data.counter+" "+(state.step+1)+data.of+"7";
 $("stepPercent").textContent=Math.round((state.step+1)/7*100)+"%";
 $("progressFill").style.width=((state.step+1)/7*100)+"%";
 $("stepNav").setAttribute("aria-label","Installation steps");$("stepNav").replaceChildren();
 data.steps.forEach((s,i)=>{const b=document.createElement("button");b.type="button";b.textContent=(i+1)+". "+s[0];b.className=(i===state.step?"active ":"")+(i<state.step?"done":"");b.disabled=i>state.step;b.setAttribute("aria-current",i===state.step?"step":"false");b.addEventListener("click",()=>{if(i<=state.step){state.step=i;saveQuiet();render()}});$("stepNav").append(b)});
 const content=$("stepContent");content.replaceChildren();
 const detail=document.createElement("div");detail.className="instruction";detail.style.whiteSpace="pre-line";detail.textContent=step[2];content.append(detail);
 if(state.step===1){const a=document.createElement("a");a.href="https://github.com/signup";a.target="_blank";a.rel="noopener noreferrer";a.textContent=data.githubSignup;a.className="guide-link";content.append(a)}
 if(state.step===4){const a=document.createElement("a");a.href="https://docs.github.com/pages";a.target="_blank";a.rel="noopener noreferrer";a.textContent=data.pagesHelp;a.className="guide-link";content.append(a)}
 const row=document.createElement("label");row.className="checkline";const cb=document.createElement("input");cb.type="checkbox";cb.checked=!!state.checks[state.step];cb.addEventListener("change",()=>{state.checks[state.step]=cb.checked;saveQuiet()});const span=document.createElement("span");span.textContent=step[3];row.append(cb,span);content.append(row);
 if(state.step===6){const p=document.createElement("p");p.className="muted";p.textContent=data.finish;content.append(p)}
 $("backButton").disabled=state.step===0;$("backButton").textContent=data.back;$("nextButton").textContent=state.step===6?data.done:data.next;$("saveStatus").textContent="";
}
let timer;function saveQuiet(){clearTimeout(timer);timer=setTimeout(save,200)}
function openWizard(){ $("welcomePanel").hidden=true;$("wizardPanel").hidden=false;render()}
$("startButton").addEventListener("click",openWizard);$("saveButton").addEventListener("click",save);
$("backButton").addEventListener("click",()=>{if(state.step>0){state.step--;saveQuiet();render()}});
$("nextButton").addEventListener("click",()=>{if(!state.checks[state.step]){$("saveStatus").textContent=t().required;$("saveStatus").className="status error";return}if(state.step<6){state.step++;saveQuiet();render()}else{save();try{localStorage.setItem("otokuInstall.completed","1")}catch(e){}$("wizardPanel").hidden=true;$("dashboardPanel").hidden=false;window.dispatchEvent(new Event("otoku:dashboard"))}});
const hasProgress=load();if(hasProgress){$("resumeHint").hidden=false;$("startButton").textContent=t().resumeButton}
window.addEventListener("otoku:languagechange",e=>{lang=e.detail.language;if(!$("wizardPanel").hidden)render();if(hasProgress)$("startButton").textContent=t().resumeButton});
})();