// ================================================================
//  Moto Tours Japan ── ツアーデータ設定ファイル  tour-data.js
//  ---------------------------------------------------------------
//  ★ このファイルを編集するだけで全ページの内容が更新されます ★
//  または admin.html を開いて GUI で編集することもできます。
//
//  ⚠ このファイルはダブルクリックで開かないでください。
//     右クリック →「プログラムから開く」→ メモ帳 / VS Code を
//     選択して開いてください。
// ================================================================

// Windows Script Host から誤って実行された場合に安全に終了する
if (typeof window === 'undefined') {
  (function() {
    try {
      var WScript;
      if (typeof WScript !== 'undefined') { WScript.Quit(0); }
    } catch(e) {}
  })();
}

const TOUR_DATA = {

  // ── 管理者設定 ─────────────────────────────────────────────
  admin: {
    password: "mtj2026"   // ← 管理者パスワード（必要に応じて変更）
  },

  // ── 基本情報 ────────────────────────────────────────────────
  basic: {
    tourTitle:        "京都・大阪・奈良 歴史と食の旅 3日間",
    tourSubtitle:     "千年の都が紡ぐ、忘れられない3日間の旅",
    customerName:     "山田 太郎",
    participantCount: "2名様",
    tourDates:        "2026年4月10日（金）〜 4月12日（日）",
    area:             "京都・大阪・奈良"
  },

  // ── 集合・解散情報 ──────────────────────────────────────────
  meeting: {
    place:       "JR 京都駅 中央口",
    placeDetail: "京都府京都市下京区烏丸通塩小路下ル",
    date:        "2026年4月10日（金）",
    time:        "午前 8:45（9:00 出発）",
    endPlace:    "JR 新大阪駅 新幹線改札前",
    endTime:     "2026年4月12日（日）17:00 頃",
    note:        "集合時間の10分前にはお集まりください。"
  },

  // ── 添乗員・ご挨拶 ──────────────────────────────────────────
  guide: {
    name:     "田中 美咲（たなか みさき）",
    title:    "担当添乗員 / Moto Tours Japan 観光部",
    phone:    "090-XXXX-XXXX",
    email:    "m.tanaka@mototoursjapan.com",
    lineId:   "tabibito_tanaka",
    greeting: "山田 太郎 様\n\nこのたびは「京都・大阪 歴史と食の旅 2日間」にご参加いただき、誠にありがとうございます。\n\n千年の歴史を誇る古都・京都から、活気あふれる大阪まで、日本の魅力を存分にお楽しみいただけるよう、スタッフ一同、心を込めてご案内いたします。清水寺の舞台から眺める景色、金閣寺の輝き、そして大阪の絶品グルメ——どれも一生の思い出になることと思います。\n\n旅の途中でご不明な点やご要望がございましたら、どうぞお気軽に担当添乗員までお申し付けください。皆様の笑顔が、私たちの最大の喜びです。どうぞ、素晴らしい旅をお楽しみくださいませ。"
  },

  // ── 含まれるもの / 含まれないもの ──────────────────────────
  includes: [
    "往復交通費（新幹線 東京〜京都・新大阪〜東京）",
    "2泊宿泊費（各ホテル・朝食付き）",
    "観光バス代（3日間）",
    "入場料（清水寺・金閣寺・大阪城・東大寺）",
    "Day2 昼食代（道頓堀にて）",
    "Day3 昼食代（ならまちにて）",
    "旅行傷害保険",
    "添乗員同行（全行程）",
    "旅のしおり（本ページ）"
  ],
  excludes: [
    "昼食代（Day1・各自自由）",
    "夕食代（3日間・各自自由）",
    "お土産・個人的な買い物",
    "ホテルのルームサービス・ミニバー",
    "個人的な事由による交通費",
    "チップ（任意）"
  ],

  // ── Day 1 行程 ──────────────────────────────────────────────
  day1: {
    date:  "2026年4月10日（金）",
    theme: "京都を満喫する一日",
    items: [
      { time: "08:45",       title: "集合",                   place: "JR京都駅 中央口",              desc: "添乗員・田中が「Moto Tours Japan」の旗を持ってお待ちしております。集合後、行程説明を行います。9:00 出発予定。",              icon: "fa-solid fa-flag",             badge: "集合",    badgeType: "red",   isHighlight: true  },
      { time: "09:00",       title: "観光バス出発",           place: "京都駅発",                      desc: "本日使用の観光バスに乗車。添乗員より行程の説明を行います。座席は自由席です。",                                         icon: "fa-solid fa-bus",              badge: "",         badgeType: "",      isHighlight: false },
      { time: "09:45〜11:15",title: "清水寺 参拝・散策",     place: "京都市東山区清水1丁目294",      desc: "世界遺産「清水の舞台」から京都市街を一望。音羽の滝・参道のお土産めぐりもお楽しみください。（約90分）",                icon: "fa-solid fa-torii-gate",       badge: "入場料込", badgeType: "blue",  isHighlight: true  },
      { time: "11:30〜13:30",title: "祇園・産寧坂 散策",     place: "京都市東山区祇園町〜産寧坂",    desc: "石畳の風情ある路地を散策。昼食はこのエリアのお好みのお店でお楽しみください（費用各自）。（約120分）",                   icon: "fa-solid fa-street-view",      badge: "昼食は各自",badgeType: "gold",  isHighlight: false },
      { time: "14:00〜15:00",title: "金閣寺 鑑賞",           place: "京都市北区金閣寺町1",           desc: "鏡湖池に映る黄金色の三層楼を鑑賞。世界遺産指定の日本最高峰の美を間近で。（約60分）",                                  icon: "fa-solid fa-gopuram",          badge: "入場料込", badgeType: "blue",  isHighlight: true  },
      { time: "15:15〜16:45",title: "嵐山 竹林・渡月橋",     place: "京都市右京区嵐山〜嵯峨野",      desc: "神秘的な竹林の小径と渡月橋を散策。嵐山のお土産めぐりも。（約90分）",                                                  icon: "fa-solid fa-tree",             badge: "",         badgeType: "",      isHighlight: false },
      { time: "17:00",       title: "ホテルチェックイン",     place: "京都グランドホテル",             desc: "チェックイン後の夕食・夜の散策は自由です。鴨川沿いや先斗町など夜の京都もお楽しみください。",                            icon: "fa-solid fa-hotel",            badge: "宿泊",     badgeType: "green", isHighlight: true  }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d52838.63!2d135.7081539!3d35.0116363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e0!4m5!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2z5Lqs6YO95qCq6YKj!3m2!1d34.9858039!2d135.7587895!4m5!1s0x600108d6e813f0b9%3A0x8a98461abcce1eff!2z5riL5rC05a-6!3m2!1d34.994853!2d135.785003!4m5!1s0x600108a07a718429%3A0x99a4ee5e47ef7bc7!2z56uL5Zmo!3m2!1d35.036388!2d135.729617!4m5!1s0x6001a8b0564e8dff%3A0x54b7d3b43b8d0e0e!2z5qCL5bGx5qCq6YKj!3m2!1d35.034444!2d135.694924!4m5!1s0x6001a924f56f9a8d%3A0x7bffd61b87fb6df1!2z5qCq5bel5rGJ5qCq!3m2!1d35.008611!2d135.668056!4m5!1s0x6001073887d2b2e3%3A0x25cdb9df4b72fd3d!2z5Lqs6YO96LK35YKu5ZCN5a6u5YWo5YmN!3m2!1d35.011963!2d135.754867!5e0!3m2!1sja!2sjp!4v1710000000000"
  },

  // ── Day 2 行程 ──────────────────────────────────────────────
  day2: {
    date:  "2026年4月11日（土）",
    theme: "大阪の活気を楽しむ一日",
    items: [
      { time: "08:00〜09:15",title: "朝食（ホテル内レストラン）",  place: "京都グランドホテル 1F レストラン", desc: "和洋バイキング形式の朝食。京野菜のおばんざい・お粥・クロワッサンなど豊富なメニューをお楽しみください。",                icon: "fa-solid fa-mug-hot",            badge: "朝食込",   badgeType: "blue",  isHighlight: false },
      { time: "09:30",        title: "チェックアウト・ホテル出発", place: "京都グランドホテル",               desc: "チェックアウト後、ホテル玄関前に集合。荷物は観光バスに積み込みます。チェックアウトは10:00が期限です。",                  icon: "fa-solid fa-right-from-bracket", badge: "",          badgeType: "",      isHighlight: false },
      { time: "09:45",        title: "観光バスにて大阪へ移動",     place: "京都→大阪",                        desc: "阪神高速経由にて大阪市内へ移動（約60分）。バス内ではガイドより大阪の見どころをご案内します。",                          icon: "fa-solid fa-bus",                badge: "",          badgeType: "",      isHighlight: false },
      { time: "10:45〜12:15", title: "大阪城 見学",                place: "大阪市中央区大阪城1−1",            desc: "豊臣秀吉築城の国の特別史跡。天守閣最上階から大阪市内を360度一望。歴史展示も充実。（約90分）",                          icon: "fa-solid fa-chess-rook",         badge: "入場料込",  badgeType: "blue",  isHighlight: true  },
      { time: "12:30〜14:30", title: "道頓堀 昼食・散策",          place: "大阪市中央区道頓堀",               desc: "グループにて大阪名物グルメを堪能（昼食費含む）。グリコサイン前で記念撮影・戎橋周辺を散策。",                          icon: "fa-solid fa-utensils",           badge: "昼食込",    badgeType: "blue",  isHighlight: true  },
      { time: "14:30〜16:15", title: "なんば・心斎橋 自由散策",    place: "大阪市中央区〜浪速区",             desc: "大阪最大のショッピングエリアで自由行動。お土産・グルメをお楽しみください。（約105分）",                                        icon: "fa-solid fa-shopping-bag",       badge: "自由行動",  badgeType: "gold",  isHighlight: false },
      { time: "16:30",        title: "ホテルチェックイン",           place: "大阪プレミアムホテル",             desc: "2泊目のホテルにチェックイン。夕食・夜の大阪散策は自由です。道頓堀や心斎橋など夜の大阪をお楽しみください。",                    icon: "fa-solid fa-hotel",              badge: "宿泊",      badgeType: "green", isHighlight: true  }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d52702.91!2d135.5022545!3d34.6937373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e0!4m5!1s0x6000e718804f4e27%3A0xac84a87c3e5a92e1!2z5aSn6Zi_5Z6L!3m2!1d34.687297!2d135.526018!4m5!1s0x6000e6df14a7e5db%3A0xe9b6de5c7d8dcb93!2z6YGT6aGM5aQu!3m2!1d34.668736!2d135.501037!4m5!1s0x6000e68e3e1a2491%3A0x28fe73e25f25fffc!2z44Gq44KT44Gw44O76KW_6LuK!3m2!1d34.669411!2d135.499924!4m5!1s0x6000e6e69cb6bf59%3A0x4b2fe0bde478c16b!2z5paw5aSn6Zi_5ae755qE6ICQ!3m2!1d34.735694!2d135.500557!5e0!3m2!1sja!2sjp!4v1710000000001"
  },

  // ── Day 3 行程 ──────────────────────────────────────────────
  day3: {
    date:  "2026年4月12日（日）",
    theme: "奈良で歴史に触れる最終日",
    items: [
      { time: "08:00〜09:00", title: "朝食（ホテル内レストラン）",  place: "大阪プレミアムホテル 1F レストラン", desc: "ゆったりとした朝食でエネルギーチャージ。和洋バイキング形式にてご提供します。",                                          icon: "fa-solid fa-mug-hot",            badge: "朝食込",   badgeType: "blue",  isHighlight: false },
      { time: "09:30",        title: "チェックアウト・ホテル出発",  place: "大阪プレミアムホテル",              desc: "チェックアウト後、ホテル玄関前に集合。荷物は観光バスに積み込みます。チェックアウトは10:00が期限です。",                      icon: "fa-solid fa-right-from-bracket", badge: "",          badgeType: "",      isHighlight: false },
      { time: "09:45",        title: "観光バスにて奈良へ移動",      place: "大阪→奈良",                         desc: "阪奈道路経由にて奈良市内へ移動（約60分）。バス内ではガイドより奈良の見どころをご案内します。",                              icon: "fa-solid fa-bus",                badge: "",          badgeType: "",      isHighlight: false },
      { time: "10:45〜12:00", title: "東大寺 大仏殿 見学",         place: "奈良市雑司町406-1",                 desc: "世界最大級の木造建築・東大寺大仏殿で高さ14.7mの盧舎那仏（奈良の大仏）を拝観。圧倒的なスケールをご体感ください。（約75分）", icon: "fa-solid fa-gopuram",            badge: "入場料込",  badgeType: "blue",  isHighlight: true  },
      { time: "12:00〜14:00", title: "奈良公園 鹿と触れ合い・散策", place: "奈良市奈良公園周辺",               desc: "世界遺産・奈良公園で約1,200頭の野生の鹿と触れ合い。鹿せんべい（各自・100円）を購入して給餌体験も。",                        icon: "fa-solid fa-paw",                badge: "",          badgeType: "",      isHighlight: true  },
      { time: "14:15〜15:30", title: "ならまち 昼食・散策",         place: "奈良市元興寺町周辺",                desc: "奈良の古い町並みが残る「ならまち」で昼食（費用込み）。奈良漬け・柿の葉寿司・三輪素麺など奈良グルメをお楽しみください。",     icon: "fa-solid fa-utensils",           badge: "昼食込",    badgeType: "blue",  isHighlight: false },
      { time: "15:45",        title: "観光バスにて新大阪へ移動",    place: "奈良→新大阪",                       desc: "奈良市内より新大阪駅へ移動（約80分）。車内でお土産タイムとアンケート記入をお願いいたします。",                              icon: "fa-solid fa-bus",                badge: "",          badgeType: "",      isHighlight: false },
      { time: "17:00",        title: "ツアー終了・解散",             place: "JR 新大阪駅 新幹線改札前",         desc: "添乗員によるご挨拶の後、解散となります。お気をつけてお帰りください。またのご利用を心よりお待ちしております。",               icon: "fa-solid fa-flag-checkered",     badge: "解散",      badgeType: "red",   isHighlight: true  }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d52597.53!2d135.8048355!3d34.6851193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e0!4m5!1s0x6001394a5896f9b9%3A0x2eab80ddd2757949!2z5aSn6Zi_5ZCI5biC!3m2!1d34.685119!2d135.804846!4m5!1s0x6001398cba5e4c25%3A0x88d2e9d62eff476e!2z5p2x5aSn5a-6!3m2!1d34.688743!2d135.839882!4m5!1s0x6001394f43d85ff3%3A0x2b53f2e9e4d63cdb!2z5p2x5aSn5YWt5qCq5byP5Lya56S-!3m2!1d34.682494!2d135.844951!4m5!1s0x600139a1516bdd4b%3A0x5c2cdcd07a0b77ac!2z44Gq44KJ44G-44Gh!3m2!1d34.673892!2d135.827803!5e0!3m2!1sja!2sjp!4v1710000000002"
  },

  // ── ツアーハイライト ────────────────────────────────────────
  highlights: [
    { title: "清水の舞台からの絶景",      desc: "世界遺産・清水寺の舞台から京都市街を一望。春は桜も楽しめます。",              icon: "fa-solid fa-torii-gate",   color: "#2D6A4F" },
    { title: "金閣寺の黄金の輝き",        desc: "鏡湖池に映る黄金の金閣は、室町文化の粋を今に伝えます。",                    icon: "fa-solid fa-gopuram",      color: "#AA0000" },
    { title: "嵐山の竹林を歩く",          desc: "空へ伸びる無数の竹が織りなす神秘的な空間を散策。",                          icon: "fa-solid fa-tree",         color: "#1A4D2E" },
    { title: "大阪城からの眺め",          desc: "天守閣から360度の大阪市内の絶景。歴史展示も充実。",                        icon: "fa-solid fa-chess-rook",   color: "#6B1A1A" },
    { title: "道頓堀で食い倒れ",          desc: "たこ焼き・串カツ・お好み焼き——大阪名物グルメを堪能！",                      icon: "fa-solid fa-utensils",     color: "#8B3A00" },
    { title: "奈良の大仏と鹿に出会う",    desc: "世界最大級の木造建築・東大寺大仏殿で大仏を拝観し、野生の鹿と触れ合う。",    icon: "fa-solid fa-paw",          color: "#3A5A2A" },
    { title: "祇園でショッピング",        desc: "石畳の祇園・産寧坂で京みやげ探し。",                                        icon: "fa-solid fa-shopping-bag", color: "#3A1A6B" }
  ],

  // ── 宿泊施設（複数対応） ─────────────────────────────────────
  // hotels 配列：泊数分ご記入ください
  hotels: [
    {
      night:    "1泊目（Day1→Day2）",
      name:     "京都グランドホテル",
      address:  "京都府京都市中京区河原町通三条上ル",
      stars:    4,
      phone:    "075-XXX-XXXX",
      checkin:  "17:00〜",
      checkout: "〜10:00",
      wifi:     true,
      desc:     "鴨川のほど近く、観光・グルメに好アクセスな立地の4つ星ホテル。和風モダンなインテリアで日本の旅の雰囲気を演出。大浴場・スパも完備。朝食は京都の伝統食材を使った和洋バイキングをご提供しています。"
    },
    {
      night:    "2泊目（Day2→Day3）",
      name:     "大阪プレミアムホテル",
      address:  "大阪府大阪市中央区心斎橋筋X-X-X",
      stars:    4,
      phone:    "06-XXXX-XXXX",
      checkin:  "16:30〜",
      checkout: "〜10:00",
      wifi:     true,
      desc:     "心斎橋・道頓堀エリアに徒歩圏内の好立地。大阪観光の拠点に最適な4つ星ホテル。開放的なラウンジと充実した朝食ビュッフェが人気です。"
    }
  ],

  // ── 持ち物チェックリスト ────────────────────────────────────
  // 各グループに items 配列を追加・編集してください
  checklist: [
    {
      title: "必須持ち物",
      icon:  "fa-solid fa-star",
      color: "#AA0000",
      items: [
        "身分証明書（運転免許証・パスポートなど）",
        "ツアーバウチャー（本しおり）",
        "財布・現金（小銭も準備）",
        "クレジット・デビットカード",
        "スマートフォン・充電器",
        "モバイルバッテリー",
        "常備薬",
        "歩きやすいシューズ",
        "宿泊用着替え（2日分）",
        "旅行用健康保険証"
      ]
    },
    {
      title: "おすすめ持ち物",
      icon:  "fa-solid fa-thumbs-up",
      color: "#1A1A1A",
      items: [
        "折りたたみ傘・レインコート",
        "日焼け止め",
        "サングラス",
        "カメラ・予備バッテリー",
        "エコバッグ",
        "ウェットティッシュ・ハンカチ",
        "マスク（予備含む）",
        "軽量アウター",
        "ネックポーチ",
        "絆創膏・靴ずれ防止パッド"
      ]
    },
    {
      title: "神社・寺院めぐりに",
      icon:  "fa-solid fa-torii-gate",
      color: "#2D6A4F",
      items: [
        "御朱印帳（持参の方）",
        "小銭入れ（お賽銭用）",
        "リュック or ショルダーバッグ",
        "動きやすい服装"
      ]
    },
    {
      title: "大阪グルメ・ショッピング",
      icon:  "fa-solid fa-utensils",
      color: "#8B3A00",
      items: [
        "現金（屋台・小規模店用）",
        "保冷バッグ（生もの土産用）",
        "パスポート（免税手続き用）",
        "大きめのバッグ"
      ]
    }
  ],

  // ── Travel Tips ─────────────────────────────────────────────
  tips: [
    { title: "4月の気候と服装",   icon: "fa-solid fa-cloud-sun",   iconColor: "#CC0000", content: "4月の京都・大阪は日中20〜22℃前後。朝晩は10℃前後まで冷え込む場合があります。薄手のジャケットなどレイヤースタイルがおすすめ。桜の季節と重なることが多いため折りたたみ傘もご用意ください。" },
    { title: "移動・交通",         icon: "fa-solid fa-train",       iconColor: "#1A1A1A", content: "ツアー中の移動は観光バスを利用します。バスは時間通りに出発しますので余裕を持って集合場所へお集まりください。自由行動中はICカード（ICOCA・Suicaなど）が便利です。" },
    { title: "食事・グルメ",       icon: "fa-solid fa-bowl-rice",   iconColor: "#8B3A00", content: "京都おすすめ：湯豆腐・おばんざい・抹茶スイーツ。大阪おすすめ：たこ焼き・串カツ・551の豚まん。飲食店によっては現金のみの場合があります。食物アレルギーのある方は事前に添乗員にお知らせください。" },
    { title: "マナー・エチケット", icon: "fa-solid fa-hand-peace",  iconColor: "#2D6A4F", content: "神社・寺院での撮影禁止エリアに注意しましょう。歩きタバコ・路上喫煙は条例で禁止。電車内での大声での会話はご遠慮ください。自撮り棒の使用が制限されているエリアがあります。" },
    { title: "両替・お支払い",     icon: "fa-solid fa-yen-sign",    iconColor: "#6B4A00", content: "日本では現金払いが主流です。両替は京都駅・新大阪駅・コンビニATMが便利。1人あたり1〜2万円の現金をご用意ください。主要クレジットカード・PayPay・交通系ICも多くの店舗で利用可能です。" },
    { title: "Wi-Fi・通信",        icon: "fa-solid fa-wifi",        iconColor: "#0D7A8E", content: "主要観光地・駅・コンビニでフリーWi-Fi利用可能。ホテルは全館無料Wi-Fi完備です。海外からお越しの方は日本のSIMカードやポケットWi-Fiのレンタルをお勧めします（空港にて手配可能）。" }
  ],

  // ── 緊急連絡先 ──────────────────────────────────────────────
  emergency: {
    companyPhone:   "0120-XXX-XXX",
    companyHours:   "24時間 365日",
    companyAddress: "東京都新宿区西新宿X-X-X Moto Tours Japanビル 7F",
    companyEmail:   "support@mototoursjapan.com",
    others: [
      { name: "救急・消防",                        phone: "119",            note: "日本全国共通・無料" },
      { name: "警察",                              phone: "110",            note: "日本全国共通・無料" },
      { name: "JNTO外国語インフォメーション",      phone: "050-3816-2787",  note: "24時間対応" },
      { name: "京都府立医科大学附属病院",          phone: "075-251-5111",   note: "京都市上京区" },
      { name: "大阪急性期・総合医療センター",      phone: "06-6692-1201",   note: "大阪市住吉区" }
    ]
  },

  // ── オリジナルグッズ ────────────────────────────────────────
  goods: [
    { name: "オリジナルマグカップ",     price: "¥1,980", icon: "fa-solid fa-mug-hot",     iconBg: "#4A90C0", desc: "たびびとロゴの磁器製マグカップ。電子レンジ・食洗機対応。",           badge: "在庫あり",  badgeType: "green" },
    { name: "オリジナル Tシャツ",       price: "¥2,800", icon: "fa-solid fa-shirt",        iconBg: "#B8952A", desc: "旅人イラストプリント。S/M/L/XL、白・ネイビーの2色展開。",            badge: "在庫あり",  badgeType: "green" },
    { name: "エコトートバッグ",         price: "¥1,200", icon: "fa-solid fa-bag-shopping", iconBg: "#5A9CC0", desc: "コンパクトに折りたためるエコバッグ。お土産入れにも普段使いにも。", badge: "在庫あり",  badgeType: "green" },
    { name: "旅ノート（ジャーナル）",   price: "¥1,500", icon: "fa-solid fa-bookmark",     iconBg: "#C08050", desc: "地図・旅程メモ欄付きA6ノート。旅の思い出を書き留めて。",             badge: "在庫あり",  badgeType: "green" },
    { name: "キーホルダー（限定）",     price: "¥800",   icon: "fa-solid fa-key",          iconBg: "#8878C0", desc: "金閣・清水寺・道頓堀モチーフの3種類から選べます。",                  badge: "数量限定",  badgeType: "gold"  },
    { name: "ポストカードセット",       price: "¥600",   icon: "fa-solid fa-envelope",     iconBg: "#60A860", desc: "絶景写真を使ったオリジナル5枚セット。旅先から大切な人へ。",           badge: "在庫あり",  badgeType: "green" }
  ],

  // ── SNS ─────────────────────────────────────────────────────
  sns: [
    { platform: "Instagram", handle: "@tabibito_travel", desc: "旅の絶景写真を毎日投稿中！",   icon: "fa-brands fa-instagram", color: "#E1306C", url: "#" },
    { platform: "YouTube",   handle: "Moto Tours Japan 公式", desc: "ツアー動画・旅のVlog公開中",   icon: "fa-brands fa-youtube",   color: "#FF0000", url: "#" },
    { platform: "LINE",      handle: "@tabibito_travel", desc: "友だち追加で最新情報をGET！",  icon: "fa-brands fa-line",      color: "#06C755", url: "#" }
  ],

  // ── アンケート ───────────────────────────────────────────────
  survey: {
    url:   "https://forms.google.com/your-form-url-here",  // ← Google Forms等のURLに変更してください
    title: "ご旅行満足度アンケート",
    desc:  "今後のサービス向上のため、ぜひアンケートへのご協力をお願いいたします。所要時間：約3分"
  },

  // ── 会社情報 ────────────────────────────────────────────────
  company: {
    name:         "Moto Tours Japan株式会社",
    nameEn:       "Moto Tours Japan Co., Ltd.",
    address:      "〒160-XXXX 東京都新宿区西新宿X-X-X Moto Tours Japanビル 7F",
    phone:        "050-1742-3855",
    fax:          "03-XXXX-XXXX",
    hours:        "平日 9:00〜18:00 ／ 土曜 10:00〜17:00",
    email:        "info@mototoursjapan.com",
    registration: "観光庁長官登録旅行業 第XXXX号",
    association:  "一般社団法人 日本旅行業協会（JATA）正会員"
  }

}; // end TOUR_DATA

// ── データ取得ヘルパー（全ページで使用） ──────────────────────
// localStorage に管理者が保存したデータがあればそちらを優先する
function getData() {
  try {
    const override = localStorage.getItem('TOUR_DATA_OVERRIDE');
    if (override) return JSON.parse(override);
  } catch(e) {}
  return TOUR_DATA;
}
