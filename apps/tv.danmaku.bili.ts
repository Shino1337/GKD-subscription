{
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      name: '首页推荐-游戏广告',
      key: 0,
      enable: true,
      quickFind: true,
      activityIds: [
        'tv.danmaku.bili.MainActivityV2'
      ],
      rules: [
        {
          name: '点击游戏推广右下角按钮',
          key: 0,
          matches: [
            '[id="tv.danmaku.bili:id/more" && visibleToUser=true && desc=null && desc.length=null] > ImageView[visibleToUser=true && width=52 && height=52]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14217427'
          ]
        },
        {
          name: '游戏推广-点击[不感兴趣]',
          key: 1,
          preKeys: [
            0
          ],
          matches: [
            '[id="tv.danmaku.bili:id/menu_text"][text$="不感兴趣"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14217427'
          ]
        },
        {
          name: '直播推广-点击[不感兴趣]',
          key: 2,
          preKeys: [
            0
          ],
          matches: [
            '@RelativeLayout > [text$="不感兴趣"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14217427'
          ]
        }
      ]
    },
    {
      name: '游戏推广-点击[不感兴趣] TS',
      key: 1,
      enable: true,
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="tv.danmaku.bili:id/reason1"][text$="不感兴趣"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14232590'
          ],
          exampleUrls: [
            'https://m.gkd.li/60849309/77702be8-a760-4999-ac34-da3ef077f170'
          ],
          activityIds: [
            'tv.danmaku.bili.MainActivityV2'
          ]
        }
      ]
    },
    {
      name: '点击[不感兴趣] TS',
      key: 2,
      enable: true,
      quickFind: true,
      rules: [
        {
          matches: [
            '@RelativeLayout > [text$="不感兴趣"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14232590'
          ],
          exampleUrls: [
            'https://m.gkd.li/60849309/77702be8-a760-4999-ac34-da3ef077f170'
          ],
          activityIds: [
            'tv.danmaku.bili.MainActivityV2'
          ]
        }
      ]
    }
  ]
}
