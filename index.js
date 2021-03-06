/** @format */

const fs = require("fs");
var parser = require("fast-xml-parser");

var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  numParseOptions: {
    hex: true,
    leadingZeros: true,
    //skipLike: /\+[0-9]{10}/
  },
  arrayMode: false, //"strict"
  // attrValueProcessor: (val, attrName) =>
  //   he.decode(val, { isAttributeValue: true }), //default is a=>a
  // tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"],
};

try {
  var jsonObj = parser.parse(
    `<tbody>
  <tr data-index="0">
    <a href="/afghanistan">Afghanistan</a>
    <span class="row_space">93</span>
    <td style="">AF / AFG</td>
  </tr>
  <tr data-index="1">
    <a href="/albania">Albania</a>
    <span class="row_space">355</span>
    <td style="">AL / ALB</td>
  </tr>
  <tr data-index="2">
    <a href="/algeria">Algeria</a>
    <span class="row_space">213</span>
    <td style="">DZ / DZA</td>
  </tr>
  <tr data-index="3">
    <a href="/americansamoa">American Samoa</a>
    <span class="row_space">1-684</span>
    <td style="">AS / ASM</td>
  </tr>
  <tr data-index="4">
    <a href="/andorra">Andorra</a>
    <span class="row_space">376</span>
    <td style="">AD / AND</td>
  </tr>
  <tr data-index="5">
    <a href="/angola">Angola</a>
    <span class="row_space">244</span>
    <td style="">AO / AGO</td>
  </tr>
  <tr data-index="6">
    <a href="/anguilla">Anguilla</a>
    <span class="row_space">1-264</span>
    <td style="">AI / AIA</td>
  </tr>
  <tr data-index="7">
    <a href="/antarctica">Antarctica</a>
    <span class="row_space">672</span>
    <td style="">AQ / ATA</td>
  </tr>
  <tr data-index="8">
    <a href="/antiguaandbarbuda">Antigua and Barbuda</a>
    <span class="row_space">1-268</span>
    <td style="">AG / ATG</td>
  </tr>
  <tr data-index="9">
    <a href="/argentina">Argentina</a>
    <span class="row_space">54</span>
    <td style="">AR / ARG</td>
  </tr>
  <tr data-index="10">
    <a href="/armenia">Armenia</a>
    <span class="row_space">374</span>
    <td style="">AM / ARM</td>
  </tr>
  <tr data-index="11">
    <a href="/aruba">Aruba</a>
    <span class="row_space">297</span>
    <td style="">AW / ABW</td>
  </tr>
  <tr data-index="12">
    <a href="/australia">Australia</a>
    <span class="row_space">61</span>
    <td style="">AU / AUS</td>
  </tr>
  <tr data-index="13">
    <a href="/austria">Austria</a>
    <span class="row_space">43</span>
    <td style="">AT / AUT</td>
  </tr>
  <tr data-index="14">
    <a href="/azerbaijan">Azerbaijan</a>
    <span class="row_space">994</span>
    <td style="">AZ / AZE</td>
  </tr>
  <tr data-index="15">
    <a href="/bahamas">Bahamas</a>
    <span class="row_space">1-242</span>
    <td style="">BS / BHS</td>
  </tr>
  <tr data-index="16">
    <a href="/bahrain">Bahrain</a>
    <span class="row_space">973</span>
    <td style="">BH / BHR</td>
  </tr>
  <tr data-index="17">
    <a href="/bangladesh">Bangladesh</a>
    <span class="row_space">880</span>
    <td style="">BD / BGD</td>
  </tr>
  <tr data-index="18">
    <a href="/barbados">Barbados</a>
    <span class="row_space">1-246</span>
    <td style="">BB / BRB</td>
  </tr>
  <tr data-index="19">
    <a href="/belarus">Belarus</a>
    <span class="row_space">375</span>
    <td style="">BY / BLR</td>
  </tr>
  <tr data-index="20">
    <a href="/belgium">Belgium</a>
    <span class="row_space">32</span>
    <td style="">BE / BEL</td>
  </tr>
  <tr data-index="21">
    <a href="/belize">Belize</a>
    <span class="row_space">501</span>
    <td style="">BZ / BLZ</td>
  </tr>
  <tr data-index="22">
    <a href="/benin">Benin</a>
    <span class="row_space">229</span>
    <td style="">BJ / BEN</td>
  </tr>
  <tr data-index="23">
    <a href="/bermuda">Bermuda</a>
    <span class="row_space">1-441</span>
    <td style="">BM / BMU</td>
  </tr>
  <tr data-index="24">
    <a href="/bhutan">Bhutan</a>
    <span class="row_space">975</span>
    <td style="">BT / BTN</td>
  </tr>
  <tr data-index="25">
    <a href="/bolivia">Bolivia</a>
    <span class="row_space">591</span>
    <td style="">BO / BOL</td>
  </tr>
  <tr data-index="26">
    <a href="/bosnia">Bosnia and Herzegovina</a>
    <span class="row_space">387</span>
    <td style="">BA / BIH</td>
  </tr>
  <tr data-index="27">
    <a href="/botswana">Botswana</a>
    <span class="row_space">267</span>
    <td style="">BW / BWA</td>
  </tr>
  <tr data-index="28">
    <a href="/brazil">Brazil</a>
    <span class="row_space">55</span>
    <td style="">BR / BRA</td>
  </tr>
  <tr data-index="29">
    <a href="/britishindianoceanterritory">British Indian Ocean Territory</a>
    <span class="row_space">246</span>
    <td style="">IO / IOT</td>
  </tr>
  <tr data-index="30">
    <a href="/britishvirginislands">British Virgin Islands</a>
    <span class="row_space">1-284</span>
    <td style="">VG / VGB</td>
  </tr>
  <tr data-index="31">
    <a href="/brunei">Brunei</a>
    <span class="row_space">673</span>
    <td style="">BN / BRN</td>
  </tr>
  <tr data-index="32">
    <a href="/bulgaria">Bulgaria</a>
    <span class="row_space">359</span>
    <td style="">BG / BGR</td>
  </tr>
  <tr data-index="33">
    <a href="/burkinafaso">Burkina Faso</a>
    <span class="row_space">226</span>
    <td style="">BF / BFA</td>
  </tr>
  <tr data-index="34">
    <a href="/burundi">Burundi</a>
    <span class="row_space">257</span>
    <td style="">BI / BDI</td>
  </tr>
  <tr data-index="35">
    <a href="/cambodia">Cambodia</a>
    <span class="row_space">855</span>
    <td style="">KH / KHM</td>
  </tr>
  <tr data-index="36">
    <a href="/cameroon">Cameroon</a>
    <span class="row_space">237</span>
    <td style="">CM / CMR</td>
  </tr>
  <tr data-index="37">
    <a href="/canada">Canada</a>
    <span class="row_space">1</span>
    <td style="">CA / CAN</td>
  </tr>
  <tr data-index="38">
    <a href="/capeverde">Cape Verde</a>
    <span class="row_space">238</span>
    <td style="">CV / CPV</td>
  </tr>
  <tr data-index="39">
    <a href="/caymanislands">Cayman Islands</a>
    <span class="row_space">1-345</span>
    <td style="">KY / CYM</td>
  </tr>
  <tr data-index="40">
    <a href="/centralafricanrepublic">Central African Republic</a>
    <span class="row_space">236</span>
    <td style="">CF / CAF</td>
  </tr>
  <tr data-index="41">
    <a href="/chad">Chad</a>
    <span class="row_space">235</span>
    <td style="">TD / TCD</td>
  </tr>
  <tr data-index="42">
    <a href="/chile">Chile</a>
    <span class="row_space">56</span>
    <td style="">CL / CHL</td>
  </tr>
  <tr data-index="43">
    <a href="/china">China</a>
    <span class="row_space">86</span>
    <td style="">CN / CHN</td>
  </tr>
  <tr data-index="44">
    <a href="/christmasisland">Christmas Island</a>
    <span class="row_space">61</span>
    <td style="">CX / CXR</td>
  </tr>
  <tr data-index="45">
    <a href="/cocoskeelingislands">Cocos Islands</a>
    <span class="row_space">61</span>
    <td style="">CC / CCK</td>
  </tr>
  <tr data-index="46">
    <a href="/colombia">Colombia</a>
    <span class="row_space">57</span>
    <td style="">CO / COL</td>
  </tr>
  <tr data-index="47">
    <a href="/comoros">Comoros</a>
    <span class="row_space">269</span>
    <td style="">KM / COM</td>
  </tr>
  <tr data-index="48">
    <a href="/cookislands">Cook Islands</a>
    <span class="row_space">682</span>
    <td style="">CK / COK</td>
  </tr>
  <tr data-index="49">
    <a href="/costarica">Costa Rica</a>
    <span class="row_space">506</span>
    <td style="">CR / CRI</td>
  </tr>
  <tr data-index="50">
    <a href="/croatia">Croatia</a>
    <span class="row_space">385</span>
    <td style="">HR / HRV</td>
  </tr>
  <tr data-index="51">
    <a href="/cuba">Cuba</a>
    <span class="row_space">53</span>
    <td style="">CU / CUB</td>
  </tr>
  <tr data-index="52">
    <a href="/curacao">Curacao</a>
    <span class="row_space">599</span>
    <td style="">CW / CUW</td>
  </tr>
  <tr data-index="53">
    <a href="/cyprus">Cyprus</a>
    <span class="row_space">357</span>
    <td style="">CY / CYP</td>
  </tr>
  <tr data-index="54">
    <a href="/czechrepublic">Czech Republic</a>
    <span class="row_space">420</span>
    <td style="">CZ / CZE</td>
  </tr>
  <tr data-index="55">
    <a href="/congodemocraticrepublic">Democratic Republic of the Congo</a>
    <span class="row_space">243</span>
    <td style="">CD / COD</td>
  </tr>
  <tr data-index="56">
    <a href="/denmark">Denmark</a>
    <span class="row_space">45</span>
    <td style="">DK / DNK</td>
  </tr>
  <tr data-index="57">
    <a href="/djibouti">Djibouti</a>
    <span class="row_space">253</span>
    <td style="">DJ / DJI</td>
  </tr>
  <tr data-index="58">
    <a href="/dominica">Dominica</a>
    <span class="row_space">1-767</span>
    <td style="">DM / DMA</td>
  </tr>
  <tr data-index="59">
    <a href="/dominicanrepublic">Dominican Republic</a>
    <span class="row_space">1-809, 1-829, 1-849</span>
    <td style="">DO / DOM</td>
  </tr>
  <tr data-index="60">
    <a href="/easttimor">East Timor</a>
    <span class="row_space">670</span>
    <td style="">TL / TLS</td>
  </tr>
  <tr data-index="61">
    <a href="/ecuador">Ecuador</a>
    <span class="row_space">593</span>
    <td style="">EC / ECU</td>
  </tr>
  <tr data-index="62">
    <a href="/egypt">Egypt</a>
    <span class="row_space">20</span>
    <td style="">EG / EGY</td>
  </tr>
  <tr data-index="63">
    <a href="/elsalvador">El Salvador</a>
    <span class="row_space">503</span>
    <td style="">SV / SLV</td>
  </tr>
  <tr data-index="64">
    <a href="/equatorialguinea">Equatorial Guinea</a>
    <span class="row_space">240</span>
    <td style="">GQ / GNQ</td>
  </tr>
  <tr data-index="65">
    <a href="/eritrea">Eritrea</a>
    <span class="row_space">291</span>
    <td style="">ER / ERI</td>
  </tr>
  <tr data-index="66">
    <a href="/estonia">Estonia</a>
    <span class="row_space">372</span>
    <td style="">EE / EST</td>
  </tr>
  <tr data-index="67">
    <a href="/ethiopia">Ethiopia</a>
    <span class="row_space">251</span>
    <td style="">ET / ETH</td>
  </tr>
  <tr data-index="68">
    <a href="/falklands">Falkland Islands</a>
    <span class="row_space">500</span>
    <td style="">FK / FLK</td>
  </tr>
  <tr data-index="69">
    <a href="/faroeislands">Faroe Islands</a>
    <span class="row_space">298</span>
    <td style="">FO / FRO</td>
  </tr>
  <tr data-index="70">
    <a href="/fiji">Fiji</a>
    <span class="row_space">679</span>
    <td style="">FJ / FJI</td>
  </tr>
  <tr data-index="71">
    <a href="/finland">Finland</a>
    <span class="row_space">358</span>
    <td style="">FI / FIN</td>
  </tr>
  <tr data-index="72">
    <a href="/france">France</a>
    <span class="row_space">33</span>
    <td style="">FR / FRA</td>
  </tr>
  <tr data-index="73">
    <a href="/frenchpolynesia">French Polynesia</a>
    <span class="row_space">689</span>
    <td style="">PF / PYF</td>
  </tr>
  <tr data-index="74">
    <a href="/gabon">Gabon</a>
    <span class="row_space">241</span>
    <td style="">GA / GAB</td>
  </tr>
  <tr data-index="75">
    <a href="/gambia">Gambia</a>
    <span class="row_space">220</span>
    <td style="">GM / GMB</td>
  </tr>
  <tr data-index="76">
    <a href="/georgia">Georgia</a>
    <span class="row_space">995</span>
    <td style="">GE / GEO</td>
  </tr>
  <tr data-index="77">
    <a href="/germany">Germany</a>
    <span class="row_space">49</span>
    <td style="">DE / DEU</td>
  </tr>
  <tr data-index="78">
    <a href="/ghana">Ghana</a>
    <span class="row_space">233</span>
    <td style="">GH / GHA</td>
  </tr>
  <tr data-index="79">
    <a href="/gibraltar">Gibraltar</a>
    <span class="row_space">350</span>
    <td style="">GI / GIB</td>
  </tr>
  <tr data-index="80">
    <a href="/greece">Greece</a>
    <span class="row_space">30</span>
    <td style="">GR / GRC</td>
  </tr>
  <tr data-index="81">
    <a href="/greenland">Greenland</a>
    <span class="row_space">299</span>
    <td style="">GL / GRL</td>
  </tr>
  <tr data-index="82">
    <a href="/grenada">Grenada</a>
    <span class="row_space">1-473</span>
    <td style="">GD / GRD</td>
  </tr>
  <tr data-index="83">
    <a href="/guam">Guam</a>
    <span class="row_space">1-671</span>
    <td style="">GU / GUM</td>
  </tr>
  <tr data-index="84">
    <a href="/guatemala">Guatemala</a>
    <span class="row_space">502</span>
    <td style="">GT / GTM</td>
  </tr>
  <tr data-index="85">
    <a href="/guernsey">Guernsey</a>
    <span class="row_space">44-1481</span>
    <td style="">GG / GGY</td>
  </tr>
  <tr data-index="86">
    <a href="/guinea">Guinea</a>
    <span class="row_space">224</span>
    <td style="">GN / GIN</td>
  </tr>
  <tr data-index="87">
    <a href="/guineabissau">Guinea-Bissau</a>
    <span class="row_space">245</span>
    <td style="">GW / GNB</td>
  </tr>
  <tr data-index="88">
    <a href="/guyana">Guyana</a>
    <span class="row_space">592</span>
    <td style="">GY / GUY</td>
  </tr>
  <tr data-index="89">
    <a href="/haiti">Haiti</a>
    <span class="row_space">509</span>
    <td style="">HT / HTI</td>
  </tr>
  <tr data-index="90">
    <a href="/honduras">Honduras</a>
    <span class="row_space">504</span>
    <td style="">HN / HND</td>
  </tr>
  <tr data-index="91">
    <a href="/hongkong">Hong Kong</a>
    <span class="row_space">852</span>
    <td style="">HK / HKG</td>
  </tr>
  <tr data-index="92">
    <a href="/hungary">Hungary</a>
    <span class="row_space">36</span>
    <td style="">HU / HUN</td>
  </tr>
  <tr data-index="93">
    <a href="/iceland">Iceland</a>
    <span class="row_space">354</span>
    <td style="">IS / ISL</td>
  </tr>
  <tr data-index="94">
    <a href="/india">India</a>
    <span class="row_space">91</span>
    <td style="">IN / IND</td>
  </tr>
  <tr data-index="95">
    <a href="/indonesia">Indonesia</a>
    <span class="row_space">62</span>
    <td style="">ID / IDN</td>
  </tr>
  <tr data-index="96">
    <a href="/iran">Iran</a>
    <span class="row_space">98</span>
    <td style="">IR / IRN</td>
  </tr>
  <tr data-index="97">
    <a href="/iraq">Iraq</a>
    <span class="row_space">964</span>
    <td style="">IQ / IRQ</td>
  </tr>
  <tr data-index="98">
    <a href="/ireland">Ireland</a>
    <span class="row_space">353</span>
    <td style="">IE / IRL</td>
  </tr>
  <tr data-index="99">
    <a href="/isleofman">Isle of Man</a>
    <span class="row_space">44-1624</span>
    <td style="">IM / IMN</td>
  </tr>
  <tr data-index="100">
    <a href="/israel">Israel</a>
    <span class="row_space">972</span>
    <td style="">IL / ISR</td>
  </tr>
  <tr data-index="101">
    <a href="/italy">Italy</a>
    <span class="row_space">39</span>
    <td style="">IT / ITA</td>
  </tr>
  <tr data-index="102">
    <a href="/ivorycoast">Ivory Coast</a>
    <span class="row_space">225</span>
    <td style="">CI / CIV</td>
  </tr>
  <tr data-index="103">
    <a href="/jamaica">Jamaica</a>
    <span class="row_space">1-876</span>
    <td style="">JM / JAM</td>
  </tr>
  <tr data-index="104">
    <a href="/japan">Japan</a>
    <span class="row_space">81</span>
    <td style="">JP / JPN</td>
  </tr>
  <tr data-index="105">
    <a href="/jersey">Jersey</a>
    <span class="row_space">44-1534</span>
    <td style="">JE / JEY</td>
  </tr>
  <tr data-index="106">
    <a href="/jordan">Jordan</a>
    <span class="row_space">962</span>
    <td style="">JO / JOR</td>
  </tr>
  <tr data-index="107">
    <a href="/kazakhstan">Kazakhstan</a>
    <span class="row_space">7</span>
    <td style="">KZ / KAZ</td>
  </tr>
  <tr data-index="108">
    <a href="/kenya">Kenya</a>
    <span class="row_space">254</span>
    <td style="">KE / KEN</td>
  </tr>
  <tr data-index="109">
    <a href="/kiribati">Kiribati</a>
    <span class="row_space">686</span>
    <td style="">KI / KIR</td>
  </tr>
  <tr data-index="110">
    <a href="/kosovo">Kosovo</a>
    <span class="row_space">383</span>
    <td style="">XK / XKX</td>
  </tr>
  <tr data-index="111">
    <a href="/kuwait">Kuwait</a>
    <span class="row_space">965</span>
    <td style="">KW / KWT</td>
  </tr>
  <tr data-index="112">
    <a href="/kyrgyzstan">Kyrgyzstan</a>
    <span class="row_space">996</span>
    <td style="">KG / KGZ</td>
  </tr>
  <tr data-index="113">
    <a href="/laos">Laos</a>
    <span class="row_space">856</span>
    <td style="">LA / LAO</td>
  </tr>
  <tr data-index="114">
    <a href="/latvia">Latvia</a>
    <span class="row_space">371</span>
    <td style="">LV / LVA</td>
  </tr>
  <tr data-index="115">
    <a href="/lebanon">Lebanon</a>
    <span class="row_space">961</span>
    <td style="">LB / LBN</td>
  </tr>
  <tr data-index="116">
    <a href="/lesotho">Lesotho</a>
    <span class="row_space">266</span>
    <td style="">LS / LSO</td>
  </tr>
  <tr data-index="117">
    <a href="/liberia">Liberia</a>
    <span class="row_space">231</span>
    <td style="">LR / LBR</td>
  </tr>
  <tr data-index="118">
    <a href="/libya">Libya</a>
    <span class="row_space">218</span>
    <td style="">LY / LBY</td>
  </tr>
  <tr data-index="119">
    <a href="/liechtenstein">Liechtenstein</a>
    <span class="row_space">423</span>
    <td style="">LI / LIE</td>
  </tr>
  <tr data-index="120">
    <a href="/lithuania">Lithuania</a>
    <span class="row_space">370</span>
    <td style="">LT / LTU</td>
  </tr>
  <tr data-index="121">
    <a href="/luxembourg">Luxembourg</a>
    <span class="row_space">352</span>
    <td style="">LU / LUX</td>
  </tr>
  <tr data-index="122">
    <a href="/macau">Macau</a>
    <span class="row_space">853</span>
    <td style="">MO / MAC</td>
  </tr>
  <tr data-index="123">
    <a href="/macedonia">Macedonia</a>
    <span class="row_space">389</span>
    <td style="">MK / MKD</td>
  </tr>
  <tr data-index="124">
    <a href="/madagascar">Madagascar</a>
    <span class="row_space">261</span>
    <td style="">MG / MDG</td>
  </tr>
  <tr data-index="125">
    <a href="/malawi">Malawi</a>
    <span class="row_space">265</span>
    <td style="">MW / MWI</td>
  </tr>
  <tr data-index="126">
    <a href="/malaysia">Malaysia</a>
    <span class="row_space">60</span>
    <td style="">MY / MYS</td>
  </tr>
  <tr data-index="127">
    <a href="/maldives">Maldives</a>
    <span class="row_space">960</span>
    <td style="">MV / MDV</td>
  </tr>
  <tr data-index="128">
    <a href="/mali">Mali</a>
    <span class="row_space">223</span>
    <td style="">ML / MLI</td>
  </tr>
  <tr data-index="129">
    <a href="/malta">Malta</a>
    <span class="row_space">356</span>
    <td style="">MT / MLT</td>
  </tr>
  <tr data-index="130">
    <a href="/marshallislands">Marshall Islands</a>
    <span class="row_space">692</span>
    <td style="">MH / MHL</td>
  </tr>
  <tr data-index="131">
    <a href="/mauritania">Mauritania</a>
    <span class="row_space">222</span>
    <td style="">MR / MRT</td>
  </tr>
  <tr data-index="132">
    <a href="/mauritius">Mauritius</a>
    <span class="row_space">230</span>
    <td style="">MU / MUS</td>
  </tr>
  <tr data-index="133">
    <a href="/mayotte">Mayotte</a>
    <span class="row_space">262</span>
    <td style="">YT / MYT</td>
  </tr>
  <tr data-index="134">
    <a href="/mexico">Mexico</a>
    <span class="row_space">52</span>
    <td style="">MX / MEX</td>
  </tr>
  <tr data-index="135">
    <a href="/micronesia">Micronesia</a>
    <span class="row_space">691</span>
    <td style="">FM / FSM</td>
  </tr>
  <tr data-index="136">
    <a href="/moldova">Moldova</a>
    <span class="row_space">373</span>
    <td style="">MD / MDA</td>
  </tr>
  <tr data-index="137">
    <a href="/monaco">Monaco</a>
    <span class="row_space">377</span>
    <td style="">MC / MCO</td>
  </tr>
  <tr data-index="138">
    <a href="/mongolia">Mongolia</a>
    <span class="row_space">976</span>
    <td style="">MN / MNG</td>
  </tr>
  <tr data-index="139">
    <a href="/montenegro">Montenegro</a>
    <span class="row_space">382</span>
    <td style="">ME / MNE</td>
  </tr>
  <tr data-index="140">
    <a href="/montserrat">Montserrat</a>
    <span class="row_space">1-664</span>
    <td style="">MS / MSR</td>
  </tr>
  <tr data-index="141">
    <a href="/morocco">Morocco</a>
    <span class="row_space">212</span>
    <td style="">MA / MAR</td>
  </tr>
  <tr data-index="142">
    <a href="/mozambique">Mozambique</a>
    <span class="row_space">258</span>
    <td style="">MZ / MOZ</td>
  </tr>
  <tr data-index="143">
    <a href="/burma">Myanmar</a>
    <span class="row_space">95</span>
    <td style="">MM / MMR</td>
  </tr>
  <tr data-index="144">
    <a href="/namibia">Namibia</a>
    <span class="row_space">264</span>
    <td style="">NA / NAM</td>
  </tr>
  <tr data-index="145">
    <a href="/nauru">Nauru</a>
    <span class="row_space">674</span>
    <td style="">NR / NRU</td>
  </tr>
  <tr data-index="146">
    <a href="/nepal">Nepal</a>
    <span class="row_space">977</span>
    <td style="">NP / NPL</td>
  </tr>
  <tr data-index="147">
    <a href="/netherlands">Netherlands</a>
    <span class="row_space">31</span>
    <td style="">NL / NLD</td>
  </tr>
  <tr data-index="148">
    <a href="/netherlandsantilles">Netherlands Antilles</a>
    <span class="row_space">599</span>
    <td style="">AN / ANT</td>
  </tr>
  <tr data-index="149">
    <a href="/newcaledonia">New Caledonia</a>
    <span class="row_space">687</span>
    <td style="">NC / NCL</td>
  </tr>
  <tr data-index="150">
    <a href="/newzealand">New Zealand</a>
    <span class="row_space">64</span>
    <td style="">NZ / NZL</td>
  </tr>
  <tr data-index="151">
    <a href="/nicaragua">Nicaragua</a>
    <span class="row_space">505</span>
    <td style="">NI / NIC</td>
  </tr>
  <tr data-index="152">
    <a href="/niger">Niger</a>
    <span class="row_space">227</span>
    <td style="">NE / NER</td>
  </tr>
  <tr data-index="153">
    <a href="/nigeria">Nigeria</a>
    <span class="row_space">234</span>
    <td style="">NG / NGA</td>
  </tr>
  <tr data-index="154">
    <a href="/niue">Niue</a>
    <span class="row_space">683</span>
    <td style="">NU / NIU</td>
  </tr>
  <tr data-index="155">
    <a href="/northkorea">North Korea</a>
    <span class="row_space">850</span>
    <td style="">KP / PRK</td>
  </tr>
  <tr data-index="156">
    <a href="/northernmarianaislands">Northern Mariana Islands</a>
    <span class="row_space">1-670</span>
    <td style="">MP / MNP</td>
  </tr>
  <tr data-index="157">
    <a href="/norway">Norway</a>
    <span class="row_space">47</span>
    <td style="">NO / NOR</td>
  </tr>
  <tr data-index="158">
    <a href="/oman">Oman</a>
    <span class="row_space">968</span>
    <td style="">OM / OMN</td>
  </tr>
  <tr data-index="159">
    <a href="/pakistan">Pakistan</a>
    <span class="row_space">92</span>
    <td style="">PK / PAK</td>
  </tr>
  <tr data-index="160">
    <a href="/palau">Palau</a>
    <span class="row_space">680</span>
    <td style="">PW / PLW</td>
  </tr>
  <tr data-index="161">
    <a href="/palestine">Palestine</a>
    <span class="row_space">970</span>
    <td style="">PS / PSE</td>
  </tr>
  <tr data-index="162">
    <a href="/panama">Panama</a>
    <span class="row_space">507</span>
    <td style="">PA / PAN</td>
  </tr>
  <tr data-index="163">
    <a href="/papuanewguinea">Papua New Guinea</a>
    <span class="row_space">675</span>
    <td style="">PG / PNG</td>
  </tr>
  <tr data-index="164">
    <a href="/paraguay">Paraguay</a>
    <span class="row_space">595</span>
    <td style="">PY / PRY</td>
  </tr>
  <tr data-index="165">
    <a href="/peru">Peru</a>
    <span class="row_space">51</span>
    <td style="">PE / PER</td>
  </tr>
  <tr data-index="166">
    <a href="/philippines">Philippines</a>
    <span class="row_space">63</span>
    <td style="">PH / PHL</td>
  </tr>
  <tr data-index="167">
    <a href="/pitcairnislands">Pitcairn</a>
    <span class="row_space">64</span>
    <td style="">PN / PCN</td>
  </tr>
  <tr data-index="168">
    <a href="/poland">Poland</a>
    <span class="row_space">48</span>
    <td style="">PL / POL</td>
  </tr>
  <tr data-index="169">
    <a href="/portugal">Portugal</a>
    <span class="row_space">351</span>
    <td style="">PT / PRT</td>
  </tr>
  <tr data-index="170">
    <a href="/puertorico">Puerto Rico</a>
    <span class="row_space">1-787, 1-939</span>
    <td style="">PR / PRI</td>
  </tr>
  <tr data-index="171">
    <a href="/qatar">Qatar</a>
    <span class="row_space">974</span>
    <td style="">QA / QAT</td>
  </tr>
  <tr data-index="172">
    <a href="/congo">Republic of the Congo</a>
    <span class="row_space">242</span>
    <td style="">CG / COG</td>
  </tr>
  <tr data-index="173">
    <a href="/reunion">Reunion</a>
    <span class="row_space">262</span>
    <td style="">RE / REU</td>
  </tr>
  <tr data-index="174">
    <a href="/romania">Romania</a>
    <span class="row_space">40</span>
    <td style="">RO / ROU</td>
  </tr>
  <tr data-index="175">
    <a href="/russia">Russia</a>
    <span class="row_space">7</span>
    <td style="">RU / RUS</td>
  </tr>
  <tr data-index="176">
    <a href="/rwanda">Rwanda</a>
    <span class="row_space">250</span>
    <td style="">RW / RWA</td>
  </tr>
  <tr data-index="177">
    <a href="/saintbarthelemy">Saint Barthelemy</a>
    <span class="row_space">590</span>
    <td style="">BL / BLM</td>
  </tr>
  <tr data-index="178">
    <a href="/sthelena">Saint Helena</a>
    <span class="row_space">290</span>
    <td style="">SH / SHN</td>
  </tr>
  <tr data-index="179">
    <a href="/stkitts">Saint Kitts and Nevis</a>
    <span class="row_space">1-869</span>
    <td style="">KN / KNA</td>
  </tr>
  <tr data-index="180">
    <a href="/stlucia">Saint Lucia</a>
    <span class="row_space">1-758</span>
    <td style="">LC / LCA</td>
  </tr>
  <tr data-index="181">
    <a href="/stmartin">Saint Martin</a>
    <span class="row_space">590</span>
    <td style="">MF / MAF</td>
  </tr>
  <tr data-index="182">
    <a href="/stpierre">Saint Pierre and Miquelon</a>
    <span class="row_space">508</span>
    <td style="">PM / SPM</td>
  </tr>
  <tr data-index="183">
    <a href="/stvincent">Saint Vincent and the Grenadines</a>
    <span class="row_space">1-784</span>
    <td style="">VC / VCT</td>
  </tr>
  <tr data-index="184">
    <a href="/samoa">Samoa</a>
    <span class="row_space">685</span>
    <td style="">WS / WSM</td>
  </tr>
  <tr data-index="185">
    <a href="/sanmarino">San Marino</a>
    <span class="row_space">378</span>
    <td style="">SM / SMR</td>
  </tr>
  <tr data-index="186">
    <a href="/saotomeandprincipe">Sao Tome and Principe</a>
    <span class="row_space">239</span>
    <td style="">ST / STP</td>
  </tr>
  <tr data-index="187">
    <a href="/saudiarabia">Saudi Arabia</a>
    <span class="row_space">966</span>
    <td style="">SA / SAU</td>
  </tr>
  <tr data-index="188">
    <a href="/senegal">Senegal</a>
    <span class="row_space">221</span>
    <td style="">SN / SEN</td>
  </tr>
  <tr data-index="189">
    <a href="/serbia">Serbia</a>
    <span class="row_space">381</span>
    <td style="">RS / SRB</td>
  </tr>
  <tr data-index="190">
    <a href="/seychelles">Seychelles</a>
    <span class="row_space">248</span>
    <td style="">SC / SYC</td>
  </tr>
  <tr data-index="191">
    <a href="/sierraleone">Sierra Leone</a>
    <span class="row_space">232</span>
    <td style="">SL / SLE</td>
  </tr>
  <tr data-index="192">
    <a href="/singapore">Singapore</a>
    <span class="row_space">65</span>
    <td style="">SG / SGP</td>
  </tr>
  <tr data-index="193">
    <a href="/sintmaarten">Sint Maarten</a>
    <span class="row_space">1-721</span>
    <td style="">SX / SXM</td>
  </tr>
  <tr data-index="194">
    <a href="/slovakia">Slovakia</a>
    <span class="row_space">421</span>
    <td style="">SK / SVK</td>
  </tr>
  <tr data-index="195">
    <a href="/slovenia">Slovenia</a>
    <span class="row_space">386</span>
    <td style="">SI / SVN</td>
  </tr>
  <tr data-index="196">
    <a href="/solomonislands">Solomon Islands</a>
    <span class="row_space">677</span>
    <td style="">SB / SLB</td>
  </tr>
  <tr data-index="197">
    <a href="/somalia">Somalia</a>
    <span class="row_space">252</span>
    <td style="">SO / SOM</td>
  </tr>
  <tr data-index="198">
    <a href="/southafrica">South Africa</a>
    <span class="row_space">27</span>
    <td style="">ZA / ZAF</td>
  </tr>
  <tr data-index="199">
    <a href="/southkorea">South Korea</a>
    <span class="row_space">82</span>
    <td style="">KR / KOR</td>
  </tr>
  <tr data-index="200">
    <a href="/southsudan">South Sudan</a>
    <span class="row_space">211</span>
    <td style="">SS / SSD</td>
  </tr>
  <tr data-index="201">
    <a href="/spain">Spain</a>
    <span class="row_space">34</span>
    <td style="">ES / ESP</td>
  </tr>
  <tr data-index="202">
    <a href="/srilanka">Sri Lanka</a>
    <span class="row_space">94</span>
    <td style="">LK / LKA</td>
  </tr>
  <tr data-index="203">
    <a href="/sudan">Sudan</a>
    <span class="row_space">249</span>
    <td style="">SD / SDN</td>
  </tr>
  <tr data-index="204">
    <a href="/suriname">Suriname</a>
    <span class="row_space">597</span>
    <td style="">SR / SUR</td>
  </tr>
  <tr data-index="205">
    <a href="/svalbard">Svalbard and Jan Mayen</a>
    <span class="row_space">47</span>
    <td style="">SJ / SJM</td>
  </tr>
  <tr data-index="206">
    <a href="/swaziland">Swaziland</a>
    <span class="row_space">268</span>
    <td style="">SZ / SWZ</td>
  </tr>
  <tr data-index="207">
    <a href="/sweden">Sweden</a>
    <span class="row_space">46</span>
    <td style="">SE / SWE</td>
  </tr>
  <tr data-index="208">
    <a href="/switzerland">Switzerland</a>
    <span class="row_space">41</span>
    <td style="">CH / CHE</td>
  </tr>
  <tr data-index="209">
    <a href="/syria">Syria</a>
    <span class="row_space">963</span>
    <td style="">SY / SYR</td>
  </tr>
  <tr data-index="210">
    <a href="/taiwan">Taiwan</a>
    <span class="row_space">886</span>
    <td style="">TW / TWN</td>
  </tr>
  <tr data-index="211">
    <a href="/tajikistan">Tajikistan</a>
    <span class="row_space">992</span>
    <td style="">TJ / TJK</td>
  </tr>
  <tr data-index="212">
    <a href="/tanzania">Tanzania</a>
    <span class="row_space">255</span>
    <td style="">TZ / TZA</td>
  </tr>
  <tr data-index="213">
    <a href="/thailand">Thailand</a>
    <span class="row_space">66</span>
    <td style="">TH / THA</td>
  </tr>
  <tr data-index="214">
    <a href="/togo">Togo</a>
    <span class="row_space">228</span>
    <td style="">TG / TGO</td>
  </tr>
  <tr data-index="215">
    <a href="/tokelau">Tokelau</a>
    <span class="row_space">690</span>
    <td style="">TK / TKL</td>
  </tr>
  <tr data-index="216">
    <a href="/tonga">Tonga</a>
    <span class="row_space">676</span>
    <td style="">TO / TON</td>
  </tr>
  <tr data-index="217">
    <a href="/trinidadandtobago">Trinidad and Tobago</a>
    <span class="row_space">1-868</span>
    <td style="">TT / TTO</td>
  </tr>
  <tr data-index="218">
    <a href="/tunisia">Tunisia</a>
    <span class="row_space">216</span>
    <td style="">TN / TUN</td>
  </tr>
  <tr data-index="219">
    <a href="/turkey">Turkey</a>
    <span class="row_space">90</span>
    <td style="">TR / TUR</td>
  </tr>
  <tr data-index="220">
    <a href="/turkmenistan">Turkmenistan</a>
    <span class="row_space">993</span>
    <td style="">TM / TKM</td>
  </tr>
  <tr data-index="221">
    <a href="/turksandcaicos">Turks and Caicos Islands</a>
    <span class="row_space">1-649</span>
    <td style="">TC / TCA</td>
  </tr>
  <tr data-index="222">
    <a href="/tuvalu">Tuvalu</a>
    <span class="row_space">688</span>
    <td style="">TV / TUV</td>
  </tr>
  <tr data-index="223">
    <a href="/virginislands">U.S. Virgin Islands</a>
    <span class="row_space">1-340</span>
    <td style="">VI / VIR</td>
  </tr>
  <tr data-index="224">
    <a href="/uganda">Uganda</a>
    <span class="row_space">256</span>
    <td style="">UG / UGA</td>
  </tr>
  <tr data-index="225">
    <a href="/ukraine">Ukraine</a>
    <span class="row_space">380</span>
    <td style="">UA / UKR</td>
  </tr>
  <tr data-index="226">
    <a href="/uae">United Arab Emirates</a>
    <span class="row_space">971</span>
    <td style="">AE / ARE</td>
  </tr>
  <tr data-index="227">
    <a href="/uk">United Kingdom</a>
    <span class="row_space">44</span>
    <td style="">GB / GBR</td>
  </tr>
  <tr data-index="228">
    <a href="/usa">United States</a>
    <span class="row_space">1</span>
    <td style="">US / USA</td>
  </tr>
  <tr data-index="229">
    <a href="/uruguay">Uruguay</a>
    <span class="row_space">598</span>
    <td style="">UY / URY</td>
  </tr>
  <tr data-index="230">
    <a href="/uzbekistan">Uzbekistan</a>
    <span class="row_space">998</span>
    <td style="">UZ / UZB</td>
  </tr>
  <tr data-index="231">
    <a href="/vanuatu">Vanuatu</a>
    <span class="row_space">678</span>
    <td style="">VU / VUT</td>
  </tr>
  <tr data-index="232">
    <a href="/vatican">Vatican</a>
    <span class="row_space">379</span>
    <td style="">VA / VAT</td>
  </tr>
  <tr data-index="233">
    <a href="/venezuela">Venezuela</a>
    <span class="row_space">58</span>
    <td style="">VE / VEN</td>
  </tr>
  <tr data-index="234">
    <a href="/vietnam">Vietnam</a>
    <span class="row_space">84</span>
    <td style="">VN / VNM</td>
  </tr>
  <tr data-index="235">
    <a href="/wallisandfutuna">Wallis and Futuna</a>
    <span class="row_space">681</span>
    <td style="">WF / WLF</td>
  </tr>
  <tr data-index="236">
    <a href="/westernsahara">Western Sahara</a>
    <span class="row_space">212</span>
    <td style="">EH / ESH</td>
  </tr>
  <tr data-index="237">
    <a href="/yemen">Yemen</a>
    <span class="row_space">967</span>
    <td style="">YE / YEM</td>
  </tr>
  <tr data-index="238">
    <a href="/zambia">Zambia</a>
    <span class="row_space">260</span>
    <td style="">ZM / ZMB</td>
  </tr>
  <tr data-index="239">
    <a href="/zimbabwe">Zimbabwe</a>
    <span class="row_space">263</span>
    <td style="">ZW / ZWE</td>
  </tr>
</tbody>`,
    options,
    true
  );

  console.log(jsonObj.tbody.tr);
  const rowData = jsonObj.tbody.tr;

  const list = [];

  for (let i = 0; i < rowData.length; i += 1) {
    const { a, span, td } = rowData[i];
    const isoCodes = td.split(" ").join("").split("/");

    list.push({
      [isoCodes[0]]: [...isoCodes, span, a],
      // [isoCodes[0]]: {
      //   name: a,
      //   phoneCode: span,
      //   isoCodes,
      // },
    });
  }

  console.log(list);

  // fs.writeFile("./test.json", JSON.stringify(list), (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("file written successfully");
  // });
} catch (error) {
  console.log(error.message);
}
