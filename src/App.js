import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div id="background">
        <Head />
        <TopButton />
        <div id="bodyBack">
          <MergeTop />
          <MergeBottom />
        </div>
        <Bottom />
      </div>
    </>
  );
}

function Head() {
  return (
    <div>
      <div className="Header">
        PLAYER - BATTLE
      </div>
    </div>
  ); 
}

function Bottom() {
  return (
    <div class="text-center fs-5 mt-2">
      Copyright ©
    </div>
  )
}

function TopButton() {
  return(
    <>
      <div class="container-fluid">
        <div class="row fs-3 pb-3 pt-3 text-center text-light bg-dark">
          <div class="col-md-3">
            <strong>
            스트링
            </strong>
          </div>
          <div class="col-md-3">
            <strong>
            선수검색
            </strong>
          </div>
          <div class="col-md-3">
            <strong>
            팀기록
            </strong>
          </div>
          <div class="col-md-3">
            <strong>
            선수호칭
            </strong>
          </div>
        </div>
      </div>
    </>
  )
}

function MergeTop() {
  return (
    <>
      <div class="container-fuild">
        <div class="row">
          <div class="col-md-6" id="borderTopLeft">
            <LTSide/>
          </div>
          <div class="col-md-6" id="borderTopRight">
            <RTSide/>
          </div>
        </div>
      </div>
    </>
  )
}

function MergeBottom() {
  return (
    <>
      <div class="container-fuild">
        <div class="row">
          <div class="col-md-6" id="borderBottomLeft">
            <LBSide/>
          </div>
          <div class="col-md-6" id="borderBottomRight">
            <RBSide/>
          </div>
        </div>
      </div>
    </>
  )
}

function LTSide() {
  return(
    <>
      /* 추가 될 항목 */
    </>
  )
}

function RTSide() {
  return (
    <>
    <div class="row fs-3 pl-6 pb-3 pt-3" id="divSide">
      <strong class="col-md-2 text-center pb-1 pt-1" id="strongSub">
        주요 순위
      </strong>
    </div>
      <table class="table table-bordered text-center fs-3" align="center">
            <thead id="thBackground">
                <tr>
                    <th scope="col">항목</th>
                    <th scope="col">1위</th>
                    <th scope="col"></th>
                    <th scope="col">2위</th>
                    <th scope="col"></th>
                    <th scope="col">3위</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="tableBackground">
                <tr>
                    <th id="thBackground" scope="row">타율</th>
                    <td>이정후</td>
                    <td>0.359</td>
                    <td>강백호</td>
                    <td>0.346</td>
                    <td>전준우</td>
                    <td>0.344</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">출루율</th>
                    <td>홍창기</td>
                    <td>0.458</td>
                    <td>강백호</td>
                    <td>0.447</td>
                    <td>이정후</td>
                    <td>0.438</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">장타율</th>
                    <td>양의지</td>
                    <td>0.577</td>
                    <td>최정</td>
                    <td>0.562</td>
                    <td>한유섬</td>
                    <td>0.528</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">타점</th>
                    <td>양의지</td>
                    <td>109</td>
                    <td>강백호</td>
                    <td>101</td>
                    <td>최정</td>
                    <td>100</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">득점</th>
                    <td>구자옥</td>
                    <td>104</td>
                    <td>홍창기</td>
                    <td>101</td>
                    <td>피렐라</td>
                    <td>101</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">홈런</th>
                    <td>최정</td>
                    <td>35</td>
                    <td>알테어</td>
                    <td>32</td>
                    <td>나성범</td>
                    <td>32</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">도루</th>
                    <td>김혜성</td>
                    <td>46</td>
                    <td>최원준</td>
                    <td>40</td>
                    <td>박혜민</td>
                    <td>36</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">삼진</th>
                    <td>미란다</td>
                    <td>225</td>
                    <td>카펜터</td>
                    <td>179</td>
                    <td>루친스키</td>
                    <td>172</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">다승</th>
                    <td>뷰캐넌</td>
                    <td>16</td>
                    <td>요키시</td>
                    <td>15</td>
                    <td>루친스키</td>
                    <td>14</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">세이브</th>
                    <td>오승환</td>
                    <td>44</td>
                    <td>정해영</td>
                    <td>34</td>
                    <td>김원중</td>
                    <td>34</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

function LBSide() {
    return(
      <>
      <div class="row fs-3 pl-6 pb-3 pt-3" id="divSide">
        <strong class="col-md-2 text-center pb-1 pt-1" id="strongSub">
          팀 순위
        </strong>
      </div>
        <table class="table text-center fs-3" align="center">
            <thead id="thBackground">
                  <tr>
                      <th scope="col">순위</th>
                      <th scope="col">팀명</th>
                      <th scope="col">경기수</th>
                      <th scope="col">승</th>
                      <th scope="col">패</th>
                      <th scope="col">무</th>
                      <th scope="col">승차</th>

                  </tr>
              </thead>
              <tbody id="tableBackground">
                  <tr>
                      <td>1</td>
                      <td>삼성</td>
                      <td>141</td>
                      <td>75</td>
                      <td>57</td>
                      <td>무</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>KT</td>
                      <td>139</td>
                      <td>74</td>
                      <td>57</td>
                      <td>8</td>
                      <td>0.5</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>LG</td>
                      <td>140</td>
                      <td>70</td>
                      <td>57</td>
                      <td>13</td>
                      <td>2.5</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>두산</td>
                      <td>140</td>
                      <td>68</td>
                      <td>64</td>
                      <td>8</td>
                      <td>7.0</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>SSG</td>
                      <td>141</td>
                      <td>65</td>
                      <td>62</td>
                      <td>14</td>
                      <td>7.5</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>키움</td>
                      <td>141</td>
                      <td>67</td>
                      <td>67</td>
                      <td>7</td>
                      <td>9.0</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>NC</td>
                      <td>139</td>
                      <td>65</td>
                      <td>66</td>
                      <td>8</td>
                      <td>9.5</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>롯데</td>
                      <td>140</td>
                      <td>64</td>
                      <td>68</td>
                      <td>8</td>
                      <td>11.0</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>KIA</td>
                      <td>140</td>
                      <td>56</td>
                      <td>74</td>
                      <td>20</td>
                      <td>18.0</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>한화</td>
                      <td>141</td>
                      <td>49</td>
                      <td>81</td>
                      <td>11</td>
                      <td>25.0</td>
                  </tr>
              </tbody>
          </table>
      </>
    )
}

function RBSide(){
  return(
    <>
    <div class="row fs-3 pl-6 pb-3 pt-3" id="divSide">
        <strong class="col-md-2 text-center pb-1 pt-1" id="strongSub">
          팀 분석
        </strong>
      </div>
        <table class="table table-bordered text-center fs-3" align="center">
            <thead class="table-secondary">
                <tr>
                    <th scope="col">팀</th>
                    <th scope="col">타격</th>
                    <th scope="col">주루</th>
                    <th scope="col">수비</th>
                    <th scope="col">선발</th>
                    <th scope="col">구원</th>
                </tr>
            </thead>
            <tbody id="tableBackground">
                <tr>
                    <th id="thBackground" scope="row">KIA</th>
                    <td>-9.19</td>
                    <td>-1.36</td>
                    <td>-1.85</td>
                    <td>-1.92</td>
                    <td>0.46</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">한화</th>
                    <td>-8.54</td>
                    <td>-0.65</td>
                    <td>1.88</td>
                    <td>-2.40</td>
                    <td>-4.16</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">삼성</th>
                    <td>0.12</td>
                    <td>0.23</td>
                    <td>-0.17</td>
                    <td>4.78</td>
                    <td>-1.80</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">롯데</th>
                    <td>3.57</td>
                    <td>-0.88</td>
                    <td>-3.41</td>
                    <td>-3.30</td>
                    <td>-2.89</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">두산</th>
                    <td>4.60</td>
                    <td>-0.38</td>
                    <td>-1.30</td>
                    <td>1.72</td>
                    <td>2.48</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">키움</th>
                    <td>-0.59</td>
                    <td>1.24</td>
                    <td>0.78</td>
                    <td>-0.13</td>
                    <td>-3.34</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">SSG</th>
                    <td>5.75</td>
                    <td>0.46</td>
                    <td>0.97</td>
                    <td>-6.44</td>
                    <td>0.29</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">NC</th>
                    <td>2.68</td>
                    <td>-0.19</td>
                    <td>-0.88</td>
                    <td>0.92</td>
                    <td>-0.86</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">LG</th>
                    <td>-0.33</td>
                    <td>0.60</td>
                    <td>2.75</td>
                    <td>2.43</td>
                    <td>6.70</td>
                </tr>
                <tr>
                    <th id="thBackground" scope="row">KT</th>
                    <td>-0.16</td>
                    <td>0.54</td>
                    <td>1.42</td>
                    <td>4.77</td>
                    <td>3.08</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}


export default App;
