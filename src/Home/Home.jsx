import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <svg width="288" height="120" viewBox="0 0 288 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M161.904 115.221C168.699 118.408 176.53 120 185.394 120C198.039 120 208.203 116.106 215.886 108.319C221.192 102.94 224.666 95.9273 226.306 87.2849L226.051 87.1556C224.244 86.2301 222.56 85.1632 220.997 83.9523C219.984 90.822 217.601 96.2598 213.847 100.266C208.706 105.753 201.585 108.497 192.485 108.497C183.858 108.497 177.208 105.959 172.54 100.885C167.872 95.8114 165.538 87.5521 165.538 76.106V68.9062H140.188V72.7431C140.188 84.0709 142.108 93.1863 145.948 100.088C149.79 106.991 155.108 112.036 161.904 115.221ZM221.559 14.1584V24.331C223.384 22.9524 225.333 21.7612 227.409 20.7609V13.9832C227.409 11.6239 227.823 9.61597 228.651 7.96391C229.477 6.31305 231.013 5.25183 233.259 4.77954L238.223 3.71833V0H210.921V3.71833L215.176 4.60196C217.541 5.07329 219.195 6.19617 220.14 7.96391C221.086 9.73428 221.559 11.7991 221.559 14.1584ZM140.188 33.6294V38.0542L165.538 38.0542V33.5397C165.538 26.8739 165.598 20.237 165.715 13.6295C165.715 8.78994 167.961 5.84004 172.451 4.77954L177.416 3.71833V0H129.55V3.71833L133.451 4.60196C137.823 5.78148 139.963 8.67306 140.01 13.275C140.028 15.0361 140.049 16.7933 140.069 18.5466C140.129 23.6063 140.188 28.6337 140.188 33.6294ZM223.684 82.8563C228.539 85.3399 233.986 86.5837 240.022 86.5837C243.82 86.5837 247.335 86.1798 250.572 85.3729C253.808 84.5634 256.765 83.4149 259.441 81.9244L259.815 68.5024H257.294L253.746 76.9828C253.249 78.225 252.657 79.329 251.972 80.2932C251.288 81.2547 250.324 81.9854 249.079 82.483C248.021 82.9173 246.962 83.2596 245.904 83.5089C244.847 83.7565 243.476 83.8815 241.796 83.8815C238.125 83.8815 234.826 82.9651 231.9 81.1314C228.975 79.2986 226.657 76.207 224.945 71.857C223.235 67.5077 222.379 61.6365 222.379 54.2412C222.379 46.7848 223.28 40.8981 225.085 36.5791C226.89 32.2611 229.302 29.169 232.321 27.3057C235.339 25.4407 238.685 24.5095 242.357 24.5095C244.473 24.5095 246.308 24.8821 247.864 25.6266C248.985 26.0626 249.903 26.7758 250.619 27.7706C251.335 28.7658 252.003 29.883 252.626 31.1268L256.546 38.4903H259.068L258.694 26.2798C255.956 24.7891 253.093 23.6548 250.105 22.8782C247.118 22.1026 243.913 21.7135 240.49 21.7135C236.071 21.7135 231.9 22.4119 227.978 23.8094C224.058 25.2071 220.588 27.2899 217.57 30.0541C214.551 32.8197 212.187 36.2213 210.474 40.2614C208.763 44.2988 207.908 48.9285 207.908 54.1483C207.908 61.1069 209.323 67.011 212.156 71.857C214.987 76.7032 218.83 80.3696 223.684 82.8563Z" fill="url(#paint0_linear_167_3166)"></path> <path d="M12.4626 64.7182C10.4844 64.7182 8.74418 64.3637 7.24026 63.6529C5.69707 62.9414 4.51059 61.7963 3.67986 60.2556C2.80892 58.7139 2.37392 56.6993 2.37392 54.1713V49.9058C2.37392 48.445 2.37392 46.9428 2.37392 45.4432C2.37392 43.9417 2.37392 42.4405 2.33442 40.8998C2.33442 39.873 1.85968 39.2413 0.87023 38.9633L0 38.7674V37.9375H10.6821V38.7674L9.57467 39.0035C8.58498 39.2413 8.07098 39.9125 8.07098 40.9787C8.03124 42.4405 8.03124 43.9417 8.03124 45.4035C8.03124 46.9041 8.03124 48.4053 8.03124 49.9058V54.9222C8.03124 57.4897 8.54548 59.3069 9.61417 60.453C10.6424 61.5981 12.1066 62.1507 14.0455 62.1507C16.0634 62.1507 17.6849 61.519 18.8319 60.295C19.9798 59.0708 20.5336 57.2536 20.5336 54.8434V41.0972C20.5336 40.5846 20.4158 40.1099 20.2171 39.715C20.0193 39.3202 19.6238 39.0826 19.1096 38.9633L18.1604 38.7674V37.9375H24.2529V38.7674L23.1454 39.0035C22.6305 39.1221 22.314 39.3606 22.1163 39.715C21.9185 40.0705 21.8395 40.5444 21.8395 41.0576V54.6072C21.8395 57.8855 20.9693 60.3739 19.2678 62.1113C17.5664 63.8486 15.2715 64.7182 12.4626 64.7182L12.4626 64.7182Z" fill="#FEFEFE"></path> <path d="M23.5798 64.047V63.1775L34.3417 46.1136H28.8417C28.1701 46.1136 27.6552 46.3111 27.2992 46.6672C26.903 47.0217 26.5477 47.536 26.2315 48.1283L24.8858 50.7352L23.8566 50.657L24.1343 45.0869H39.8015V45.8775L29.2776 62.9817H35.0142C35.8052 62.9817 36.3991 62.7826 36.7949 62.3885C37.1506 62.0324 37.5066 61.519 37.8238 60.8478L39.2083 57.9637H40.2365L39.8805 64.047H23.5798V64.047Z" fill="#FEFEFE"></path> <path d="M47.5557 64.5601L41.0669 64.0469V63.2957L41.4624 63.2169C42.4909 62.9817 43.0058 62.3096 43.0058 61.2417V40.7023C43.0058 40.1896 42.9266 39.7537 42.7288 39.4781C42.5304 39.2018 42.1356 38.9633 41.6216 38.8464L41.1064 38.7278V38.0163L47.8722 36.3176L48.3864 36.6738L48.2281 42.243V46.3899C50.0878 45.1262 52.1057 44.4945 54.2819 44.4945C56.4966 44.4945 58.3168 45.2851 59.781 46.904C61.2452 48.5238 61.9572 51.0518 61.9572 54.409C61.9572 56.6605 61.6012 58.5171 60.849 60.0177C60.0975 61.5583 59.1088 62.7034 57.8825 63.4547C56.6549 64.2056 55.2707 64.5998 53.767 64.5998C52.779 64.5998 51.7893 64.4805 50.8005 64.2056C49.8111 63.9277 48.9013 63.5335 48.1489 62.9817L47.5557 64.5601L47.5557 64.5601ZM51.908 62.8624C52.7789 62.8624 53.5295 62.6246 54.2027 62.1112C54.8752 61.598 55.3894 60.7679 55.7451 59.5437C56.1021 58.3197 56.2998 56.6605 56.2998 54.566C56.2998 52.4742 56.1416 50.814 55.7849 49.6295C55.4289 48.4449 54.9542 47.6148 54.3214 47.1408C53.6482 46.6671 52.8967 46.4303 51.987 46.4303C50.8005 46.4303 49.5729 46.7847 48.3466 47.4568V61.8743C49.4146 62.5457 50.6021 62.8624 51.908 62.8624Z" fill="#FEFEFE"></path> <path d="M72.9951 44.4946C74.6571 44.4946 76.081 44.8493 77.2682 45.5204C78.4549 46.1925 79.3654 47.1409 80.0376 48.3257C80.6706 49.5504 80.9869 50.9326 80.9869 52.4743C80.9869 52.8287 80.9869 53.1454 80.9474 53.421C80.9079 53.7377 80.8684 54.0133 80.7891 54.2905H68.8803C68.9198 57.0167 69.434 58.9515 70.4237 60.136C71.4124 61.3208 72.8371 61.9131 74.7363 61.9131C76.0415 61.9131 77.1102 61.6777 77.9407 61.2417C78.7712 60.8074 79.5236 60.2159 80.1959 59.4245L80.8286 60.0177C80.0376 61.4795 78.9689 62.5852 77.6242 63.3749C76.2393 64.2057 74.6176 64.5999 72.7579 64.5999C70.8982 64.5999 69.2363 64.2057 67.8123 63.4144C66.3879 62.6247 65.2794 61.4795 64.4884 59.9783C63.6579 58.5172 63.2625 56.7394 63.2625 54.6466C63.2625 52.4743 63.7369 50.657 64.6862 49.1556C65.5966 47.6536 66.8228 46.5092 68.3258 45.6791C69.79 44.8887 71.3727 44.4946 72.9951 44.4946ZM72.7974 45.6397C72.0452 45.6397 71.3727 45.8371 70.8192 46.2723C70.2257 46.7066 69.79 47.4956 69.4735 48.5633C69.1175 49.669 68.9198 51.2099 68.8803 53.1848H75.9623C76.2393 50.5385 76.16 48.603 75.646 47.4182C75.1318 46.232 74.1818 45.6397 72.7974 45.6397Z" fill="#FEFEFE"></path> <path d="M81.6189 64.0469V63.2957L82.2131 63.0993C83.1226 62.8227 83.5578 62.191 83.5578 61.1644V40.7023C83.5578 40.1896 83.4391 39.7537 83.2413 39.4781C83.0436 39.2018 82.6481 39.0034 82.1339 38.8851L81.6189 38.7278V37.9769L88.5429 36.3176L89.0569 36.6738L88.8987 42.243V61.1644C88.8987 62.2304 89.3339 62.8624 90.2443 63.138L90.7981 63.2957V64.0469H81.6189V64.0469ZM96.0994 64.0469L88.9384 54.1712L95.9412 47.6937C96.2981 47.4181 96.4959 47.062 96.5354 46.7066C96.5749 46.3504 96.3771 46.1136 95.8622 45.9943L95.2294 45.837V45.0868H101.402V45.837L100.254 46.1136C99.6608 46.2723 99.1853 46.4697 98.8293 46.747C98.4743 47.0216 98.0383 47.4181 97.5241 47.8526L93.1727 51.9204L99.898 61.1241C100.333 61.6776 100.69 62.1112 101.046 62.3884C101.402 62.7034 101.837 62.9817 102.43 63.1774L102.826 63.2957V64.0469H96.0994L96.0994 64.0469Z" fill="#FEFEFE"></path> <path d="M107.89 42.3212C107.019 42.3212 106.267 42.0456 105.674 41.4928C105.08 40.9383 104.764 40.2277 104.764 39.3993C104.764 38.5297 105.08 37.8182 105.674 37.2661C106.267 36.7527 107.019 36.4756 107.89 36.4756C108.76 36.4756 109.511 36.7527 110.105 37.2661C110.699 37.8182 111.015 38.5297 111.015 39.3993C111.015 40.2277 110.699 40.9383 110.105 41.4928C109.511 42.0456 108.76 42.3212 107.89 42.3212ZM103.34 64.047V63.2958L103.933 63.138C104.447 62.9817 104.803 62.7432 105.001 62.4262C105.199 62.1112 105.279 61.6777 105.317 61.1645V53.8956C105.317 53.0665 105.317 52.3153 105.317 51.6037C105.317 50.9326 105.317 50.221 105.279 49.4715C105.279 48.9574 105.199 48.5238 105.001 48.2071C104.803 47.9308 104.408 47.7334 103.893 47.6149L103.34 47.4956V46.7848L110.264 44.4945L110.738 44.9288L110.619 50.5385V61.2023C110.619 61.7173 110.738 62.1507 110.936 62.4676C111.134 62.7826 111.45 63.0202 111.964 63.1775L112.399 63.2958V64.047H103.34Z" fill="#FEFEFE"></path> <path d="M120.114 64.5999C118.848 64.5999 117.701 64.4806 116.711 64.2057C115.683 63.889 114.694 63.5336 113.784 63.0202V58.3592H114.852L116.04 60.61C116.553 61.5981 117.107 62.3096 117.78 62.7826C118.414 63.2564 119.244 63.4942 120.234 63.4942C121.46 63.4942 122.449 63.2169 123.201 62.665C123.951 62.1507 124.308 61.3997 124.308 60.4924C124.308 59.6623 124.031 58.9515 123.477 58.4383C122.923 57.924 121.934 57.4108 120.51 56.9765L118.769 56.4237C117.226 55.949 116 55.2389 115.09 54.2511C114.18 53.3024 113.705 52.1172 113.705 50.657C113.705 49.511 114.022 48.4844 114.615 47.536C115.208 46.6278 116.119 45.8775 117.266 45.3247C118.414 44.7702 119.837 44.4946 121.499 44.4946C122.567 44.4946 123.596 44.6131 124.506 44.8493C125.416 45.1263 126.287 45.4817 127.157 45.9169L126.919 50.142H125.89L124.664 47.8921C124.229 47.062 123.834 46.4698 123.398 46.1136C122.963 45.7984 122.29 45.6397 121.381 45.6397C120.431 45.6397 119.6 45.8775 118.888 46.3505C118.137 46.8639 117.78 47.536 117.78 48.4053C117.78 49.2347 118.097 49.8673 118.69 50.3805C119.284 50.8929 120.272 51.4063 121.618 51.8416L123.319 52.355C125.257 52.9473 126.603 53.7771 127.434 54.7645C128.265 55.7523 128.661 56.9765 128.661 58.3592C128.661 60.2159 127.908 61.7174 126.445 62.8625C124.941 64.0066 122.844 64.5999 120.114 64.5999V64.5999Z" fill="#FEFEFE"></path> <path d="M137.048 64.5999C135.426 64.5999 134.12 64.2057 133.21 63.3749C132.26 62.5852 131.786 61.2812 131.786 59.4649C131.786 58.8322 131.786 58.2409 131.825 57.6484C131.825 57.0958 131.825 56.4237 131.825 55.6734V46.3111H129.016V45.4432L130.084 45.2852C130.836 45.1667 131.509 44.9289 132.063 44.5737C132.577 44.2173 133.091 43.7436 133.527 43.1513L136.098 39.5958H137.285L137.166 45.0868H141.677V46.3111H137.127V59.7816C137.127 60.7286 137.324 61.4391 137.759 61.9131C138.156 62.3885 138.67 62.6247 139.263 62.6247C139.778 62.6247 140.253 62.5078 140.688 62.2305C141.123 61.9929 141.519 61.6777 141.954 61.2417L142.468 61.8357C141.954 62.7035 141.281 63.3749 140.371 63.8486C139.462 64.3637 138.353 64.5998 137.048 64.5998V64.5999Z" fill="#FEFEFE"></path> <path d="M148.64 64.5999C147.136 64.5999 145.871 64.1653 144.842 63.2958C143.774 62.4676 143.26 61.2417 143.26 59.6236C143.26 58.3592 143.892 57.1747 145.118 56.107C146.345 55.0408 148.245 54.2905 150.896 53.7771C151.331 53.6588 151.884 53.579 152.477 53.4614C153.071 53.3806 153.625 53.3024 154.218 53.1848V50.3805C154.218 48.603 153.981 47.3383 153.546 46.6672C153.111 45.9944 152.398 45.6397 151.41 45.6397H151.291C150.697 45.6397 150.222 45.8371 149.867 46.1925C149.51 46.589 149.273 47.2208 149.154 48.0879L149.036 48.603C148.957 49.669 148.68 50.4199 148.205 50.8929C147.731 51.4063 147.136 51.6442 146.424 51.6442C145.752 51.6442 145.237 51.4458 144.802 51.0125C144.367 50.6174 144.13 50.1032 144.13 49.4311C144.13 48.3651 144.486 47.4569 145.237 46.7066C145.989 45.9564 146.978 45.4035 148.205 45.0474C149.431 44.692 150.736 44.4946 152.161 44.4946C154.495 44.4946 156.316 45.0474 157.542 46.1925C158.769 47.3383 159.401 49.1556 159.401 51.723V60.5326C159.401 61.6777 159.956 62.2305 161.024 62.2305H161.933L162.33 62.665C161.854 63.2564 161.34 63.732 160.747 64.0865C160.154 64.4015 159.362 64.5602 158.373 64.5602C157.226 64.5602 156.355 64.2846 155.683 63.732C155.01 63.2169 154.535 62.5078 154.337 61.5981C153.507 62.5078 152.675 63.2169 151.845 63.7698C151.014 64.3233 149.946 64.5999 148.64 64.5999V64.5999ZM150.935 62.0711C151.449 62.0711 151.963 61.9533 152.439 61.7174C152.913 61.4795 153.507 61.0847 154.218 60.5326V54.2107C153.546 54.33 152.834 54.4492 152.122 54.6072C150.975 54.8828 150.064 55.3558 149.392 56.0673C148.68 56.7791 148.324 57.7275 148.324 58.9515C148.324 60.0177 148.561 60.768 149.075 61.2812C149.55 61.7962 150.184 62.0711 150.935 62.0711Z" fill="#FEFEFE"></path> <path d="M162.25 64.047V63.2958L162.883 63.1381C163.754 62.8625 164.189 62.2305 164.189 61.2023V49.5504C164.149 48.9969 164.07 48.5633 163.912 48.2459C163.754 47.971 163.398 47.7729 162.883 47.6536L162.25 47.4956V46.7848L168.66 44.4946L169.134 44.9289L169.411 47.3787C170.361 46.5486 171.429 45.8371 172.616 45.2852C173.763 44.7701 174.911 44.4946 176.058 44.4946C177.799 44.4946 179.144 44.9676 180.094 45.9169C181.004 46.8639 181.478 48.3257 181.478 50.2612V61.2417C181.478 62.27 181.953 62.9019 182.903 63.1775L183.338 63.2958V64.047H174.238V63.2958L174.832 63.1381C175.702 62.8625 176.137 62.1911 176.137 61.2023V49.4715C176.137 48.5633 175.939 47.8921 175.544 47.4569C175.148 47.0217 174.476 46.8242 173.566 46.8242C172.26 46.8242 170.915 47.3787 169.53 48.5238V61.2417C169.53 62.27 170.005 62.9019 170.915 63.1775L171.31 63.2958V64.047H162.25H162.25Z" fill="#FEFEFE"></path> <path d="M185.671 35.1717C186.621 35.1717 187.373 35.4884 187.967 36.1605C188.56 36.8319 188.836 37.7392 188.836 38.8852C188.836 40.347 188.402 41.6896 187.571 42.953C186.74 44.2174 185.671 45.1667 184.445 45.7583L184.05 45.0869C184.564 44.6533 185.038 44.1385 185.473 43.5462C185.87 42.953 186.186 42.2027 186.424 41.3349L185.592 41.0973C184.762 40.8217 184.089 40.4259 183.615 39.9125C183.1 39.3993 182.862 38.728 182.862 37.977C182.862 37.1478 183.14 36.4361 183.693 35.9229C184.247 35.4095 184.92 35.1717 185.671 35.1717Z" fill="#FEFEFE"></path> <path d="M193.821 64.5999C192.555 64.5999 191.408 64.4806 190.418 64.2057C189.39 63.889 188.401 63.5336 187.491 63.0202V58.3592H188.559L189.746 60.61C190.26 61.5981 190.814 62.3096 191.487 62.7826C192.12 63.2564 192.951 63.4942 193.94 63.4942C195.166 63.4942 196.156 63.2169 196.907 62.665C197.659 62.1507 198.015 61.3997 198.015 60.4924C198.015 59.6623 197.738 58.9515 197.184 58.4383C196.63 57.924 195.641 57.4108 194.217 56.9765L192.476 56.4237C190.932 55.949 189.706 55.2389 188.797 54.2511C187.886 53.3024 187.412 52.1172 187.412 50.657C187.412 49.511 187.728 48.4844 188.321 47.536C188.915 46.6278 189.825 45.8775 190.973 45.3247C192.12 44.7702 193.544 44.4946 195.206 44.4946C196.274 44.4946 197.303 44.6131 198.213 44.8493C199.123 45.1263 199.993 45.4817 200.864 45.9169L200.626 50.142H199.597L198.371 47.8921C197.936 47.062 197.541 46.4698 197.105 46.1136C196.67 45.7984 195.997 45.6397 195.087 45.6397C194.138 45.6397 193.307 45.8775 192.594 46.3505C191.843 46.8639 191.487 47.536 191.487 48.4053C191.487 49.2347 191.803 49.8673 192.396 50.3805C192.99 50.8929 193.979 51.4063 195.325 51.8416L197.026 52.355C198.964 52.9473 200.309 53.7771 201.141 54.7645C201.971 55.7523 202.367 56.9765 202.367 58.3592C202.367 60.2159 201.615 61.7174 200.151 62.8625C198.648 64.0066 196.551 64.5999 193.821 64.5999V64.5999Z" fill="#FEFEFE"></path> <path d="M237.811 62.5176C236.332 62.5176 234.984 62.1894 233.767 61.5331C232.551 60.9085 231.631 59.9577 230.941 58.7113C230.251 57.4964 229.889 55.9868 229.889 54.2157C229.889 52.4436 230.284 50.9333 231.039 49.6871C231.796 48.4399 232.847 47.4882 234.129 46.7989C235.411 46.1433 236.791 45.8141 238.336 45.8141C239.586 45.8141 240.637 46.0116 241.524 46.4385C242.412 46.8639 243.069 47.3902 243.529 48.0131C243.99 48.6694 244.22 49.3597 244.22 50.081C244.22 50.7039 244.056 51.1628 243.694 51.4929C243.332 51.8193 242.84 51.9838 242.281 51.9838C241.656 51.9838 241.163 51.7536 240.801 51.3275C240.407 50.902 240.177 50.3444 240.111 49.6541C240.078 49.2273 240.111 48.8331 240.144 48.5387C240.177 48.2425 240.144 47.9471 240.111 47.6526C240.012 47.2908 239.881 47.0283 239.684 46.8976C239.454 46.7666 239.158 46.7018 238.797 46.7018C237.416 46.7018 236.365 47.2595 235.641 48.3412C234.886 49.4584 234.524 51.2615 234.524 53.7238C234.524 55.8568 234.919 57.4644 235.74 58.6126C236.562 59.7617 237.811 60.3196 239.52 60.3196C240.538 60.3196 241.36 60.1222 242.018 59.7281C242.675 59.3669 243.266 58.8093 243.825 58.087L244.351 58.4811C243.793 59.7931 242.97 60.7778 241.853 61.4681C240.703 62.1894 239.355 62.5176 237.811 62.5176V62.5176Z" fill="#FEFEFE"></path> <path d="M244.581 62.058V61.4344L245.074 61.3044C245.797 61.0732 246.158 60.5154 246.158 59.6631C246.158 58.9071 246.158 58.152 246.192 57.3984C246.192 56.6441 246.192 55.9218 246.192 55.1668V42.6979C246.192 42.2374 246.126 41.8779 245.962 41.6475C245.797 41.4171 245.501 41.2543 245.074 41.1556L244.581 41.0232V40.4003L250.333 39.0224L250.761 39.3171L250.629 43.9444V59.6631C250.662 60.0892 250.76 60.4504 250.924 60.7128C251.089 61.0082 251.352 61.2047 251.779 61.3044L252.24 61.4344V62.058H244.581V62.058Z" fill="#FEFEFE"></path> <path d="M258.714 62.5176C257.86 62.5176 257.071 62.3541 256.381 62.0257C255.69 61.7296 255.132 61.2047 254.738 60.4504C254.31 59.7281 254.113 58.7773 254.146 57.5631L254.244 49.325C254.244 48.8331 254.179 48.505 254.014 48.2755C253.85 48.0468 253.587 47.9144 253.193 47.8164L252.798 47.6856V47.095L258.419 46.0116L258.78 46.3718L258.615 51V58.4482C258.615 59.2025 258.813 59.7281 259.241 60.0565C259.635 60.4167 260.128 60.5821 260.752 60.5821C261.377 60.5821 261.968 60.4834 262.495 60.285C262.987 60.1222 263.513 59.8277 264.072 59.4656L264.171 49.3597C264.171 48.8678 264.105 48.505 263.974 48.3092C263.809 48.1118 263.546 47.9471 263.151 47.8484L262.791 47.7514V47.1601L268.279 46.0116L268.641 46.3718L268.543 51V59.5973C268.543 60.0565 268.608 60.4167 268.739 60.6801C268.838 60.9752 269.101 61.1719 269.528 61.3044L269.956 61.4344V62.058L264.401 62.3852L264.105 60.3196C263.349 60.9423 262.56 61.4681 261.672 61.8933C260.785 62.3202 259.799 62.5176 258.714 62.5176L258.714 62.5176Z" fill="#FEFEFE"></path> <path d="M276.035 62.4849L270.645 62.058V61.4344L270.973 61.3694C271.829 61.172 272.255 60.6141 272.255 59.7281V42.6642C272.255 42.2374 272.19 41.8779 272.025 41.6475C271.861 41.4171 271.533 41.2213 271.105 41.1219L270.678 41.0232V40.4333L276.299 39.0224L276.725 39.3171L276.594 43.9444V47.3902C278.139 46.3407 279.815 45.8142 281.623 45.8142C283.464 45.8142 284.976 46.4705 286.191 47.8164C287.408 49.1623 288 51.2615 288 54.052C288 55.9218 287.704 57.4644 287.08 58.7113C286.454 59.9905 285.634 60.9423 284.614 61.5659C283.595 62.1894 282.445 62.5176 281.196 62.5176C280.374 62.5176 279.553 62.4189 278.73 62.1894C277.909 61.96 277.153 61.6318 276.529 61.172L276.035 62.4849V62.4849ZM279.651 61.0732C280.374 61.0732 280.999 60.8775 281.557 60.4504C282.116 60.0235 282.544 59.3349 282.839 58.3165C283.135 57.3007 283.299 55.9218 283.299 54.182C283.299 52.4437 283.168 51.0658 282.872 50.081C282.577 49.0966 282.182 48.4063 281.656 48.0131C281.098 47.619 280.473 47.4232 279.716 47.4232C278.73 47.4232 277.712 47.7186 276.693 48.2755V60.2539C277.581 60.8115 278.566 61.0732 279.651 61.0732Z" fill="#FEFEFE"></path> <defs><linearGradient id="paint0_linear_167_3166" x1="-21.4589" y1="60" x2="518.514" y2="60" gradientUnits="userSpaceOnUse"><stop stop-color="#CC9754"></stop> <stop offset="0.0942408" stop-color="#B88234"></stop> <stop offset="0.193717" stop-color="#CCB381"></stop> <stop offset="0.314136" stop-color="#D19944"></stop> <stop offset="0.560209" stop-color="#FDE1A5"></stop> <stop offset="0.801047" stop-color="#CCB381"></stop> <stop offset="0.95288" stop-color="#C18F47"></stop> <stop offset="0.989529" stop-color="#9E681E"></stop> <stop offset="1" stop-color="#A3773B"></stop></linearGradient></defs></svg>
      <p className='home_p'>Uzbekistan’s club – dunyo darajasida muvaffaqiyatlarga erishib kelayotgan o‘zbekistonliklarning global platformasi. Bir Vatan va mushtarak qadriyatlarga ega aqliy salohiyat xabiga xush kelibsiz.</p>
    </div>
  )
}

export default Home
