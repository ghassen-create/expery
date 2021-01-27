import React from 'react';
import{Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useCombobox} from 'downshift';
import "../../Css/banner.css";




const Banner =() =>{
  const [inputItems,setINputItems]=useState([])
  const [users,setUsers]=useState([])
  const [singleUser,setSingleUser]=useState('')
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => setUsers(data))  },[])

const{isOpen ,getMenuProps ,getInputProps ,highlightedIndex,getItemProps,getComboboxProps}=useCombobox({
  items:inputItems,
  onInputValueChange :({inputValue}) =>{
    setINputItems (
      users.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
    )
  },
})



    return(
<div className="banner">
  <div className="banner-info">
  <div className="container  mt-5">
  <div className="row">
       <div className="col-md-3">
        <div {...getComboboxProps()}>
      
      <input type="text" className="search-query form-control "  {...getInputProps()}
          placeholder="Search"
          enterButton="Search"
          size="large"  />
 </div>
 <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleUser(item.name)}
            >
              <li
                style={highlightedIndex === index ? { background: "#1a30b8" } : {}}
              >
                <h4>{item.name}</h4>
              </li>
            </span>
          ))}
      </ul>
        
       </div>
       <div className="col-md-3">
         <select class="form-control" id="exampleFormControlSelect1" >
<option value="Choose Your country">Choose Your country</option>        
<option value="Afghanistan">Afghanistan</option>
<option value="Afrique_du_Sud">Afrique du Sud</option>
<option value="Albanie">Albanie</option>
<option value="Algerie">Algérie</option>
<option value="Allemagne">Allemagne</option>
<option value="Andorre">Andorre</option>
<option value="Angola">Angola</option>
<option value="Antigua-et-Barbuda">Antigua-et-Barbuda</option>
<option value="Arabie_saoudite">Arabie saoudite</option>
<option value="Argentine">Argentine</option>
<option value="Armenie">Arménie</option>
<option value="Australie">Australie</option>
<option value="Autriche">Autriche</option>
<option value="Azerbaidjan">Azerbaïdjan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrein">Bahreïn</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbade">Barbade</option>
<option value="Belau">Belau</option>
<option value="Belgique">Belgique</option>
<option value="Belize">Belize</option>
<option value="Benin">Bénin</option>
<option value="Bhoutan">Bhoutan</option>
<option value="Bielorussie">Biélorussie</option>
<option value="Birmanie">Birmanie</option>
<option value="Bolivie">Bolivie</option>
<option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
<option value="Botswana">Botswana</option>
<option value="Bresil">Brésil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgarie">Bulgarie</option>
<option value="Burkina">Burkina</option>
<option value="Burundi">Burundi</option>
<option value="Cambodge">Cambodge</option>
<option value="Cameroun">Cameroun</option>
<option value="Canada">Canada</option>
<option value="Cap-Vert">Cap-Vert</option>
<option value="Chili">Chili</option>
<option value="Chine">Chine</option>
<option value="Chypre">Chypre</option>
<option value="Colombie">Colombie</option>
<option value="Comores">Comores</option>
<option value="Congo">Congo</option>
<option value="Cook">Cook</option>
<option value="Coree_du_Nord">Corée du Nord</option>
<option value="Coree_du_Sud">Corée du Sud</option>
<option value="Costa_Rica">Costa Rica</option>
<option value="Cote_Ivoire">Côte d'Ivoire</option>
<option value="Croatie">Croatie</option>
<option value="Cuba">Cuba</option>
<option value="Danemark">Danemark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominique">Dominique</option>
<option value="Egypte">Égypte</option>
<option value="Emirats_arabes_unis">Émirats arabes unis</option>
<option value="Equateur">Équateur</option>
<option value="Erythree">Érythrée</option>
<option value="Espagne">Espagne</option>
<option value="Estonie">Estonie</option>
<option value="Etats-Unis">États-Unis</option>
<option value="Ethiopie">Éthiopie</option>
<option value="Fidji">Fidji</option>
<option value="Finlande">Finlande</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambie">Gambie</option>
<option value="Georgie">Géorgie</option>
<option value="Ghana">Ghana</option>
<option value="Grèce">Grèce</option>
<option value="Grenade">Grenade</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinee">Guinée</option>
<option value="Guinee-Bissao">Guinée-Bissao</option>
<option value="Guinee_equatoriale">Guinée équatoriale</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haïti</option>
<option value="Honduras">Honduras</option>
<option value="Hongrie">Hongrie</option>
<option value="Inde">Inde</option>
<option value="Indonesie">Indonésie</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Irlande">Irlande</option>
<option value="Islande">Islande</option>
<option value="Israël">Israël</option>
<option value="Italie">Italie</option>
<option value="Jamaique">Jamaïque</option>
<option value="Japon">Japon</option>
<option value="Jordanie">Jordanie</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kirghizistan">Kirghizistan</option>
<option value="Kiribati">Kiribati</option>
<option value="Koweit">Koweït</option>
<option value="Laos">Laos</option>
<option value="Lesotho">Lesotho</option>
<option value="Lettonie">Lettonie</option>
<option value="Liban">Liban</option>
<option value="Liberia">Liberia</option>
<option value="Libye">Libye</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lituanie">Lituanie</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macedoine">Macédoine</option>
<option value="Madagascar">Madagascar</option>
<option value="Malaisie">Malaisie</option>
<option value="Malawi">Malawi</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malte">Malte</option>
<option value="Maroc">Maroc</option>
<option value="Marshall">Marshall</option>
<option value="Maurice">Maurice</option>
<option value="Mauritanie">Mauritanie</option>
<option value="Mexique">Mexique</option>
<option value="Micronesie">Micronésie</option>
<option value="Moldavie">Moldavie</option>
<option value="Monaco">Monaco</option>
<option value="Mongolie">Mongolie</option>
<option value="Mozambique">Mozambique</option>
<option value="Namibie">Namibie</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Népal</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norvège">Norvège</option>
<option value="Nouvelle-Zelande">Nouvelle-Zélande</option>
<option value="Oman">Oman</option>
<option value="Ouganda">Ouganda</option>
<option value="Ouzbekistan">Ouzbékistan</option>
<option value="Pakistan">Pakistan</option>
<option value="Panama">Panama</option>
<option value="Papouasie-Nouvelle_Guinee">Papouasie - Nouvelle Guinée</option>
<option value="Paraguay">Paraguay</option>
<option value="Pays-Bas">Pays-Bas</option>
<option value="Perou">Pérou</option>
<option value="Philippines">Philippines</option>
<option value="Pologne">Pologne</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Republique_centrafricaine">République centrafricaine</option>
<option value="Republique_dominicaine">République dominicaine</option>
<option value="Republique_tcheque">République tchèque</option>
<option value="Roumanie">Roumanie</option>
<option value="Royaume-Uni">Royaume-Uni</option>
<option value="Russie">Russie</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint-Christophe-et-Nieves">Saint-Christophe-et-Niévès</option>
<option value="Sainte-Lucie">Sainte-Lucie</option>
<option value="Saint-Marin">Saint-Marin </option>
<option value="Saint-Siège">Saint-Siège, ou leVatican</option>
<option value="Saint-Vincent-et-les_Grenadines">Saint-Vincent-et-les Grenadines</option>
<option value="Salomon">Salomon</option>
<option value="Salvador">Salvador</option>
<option value="Samoa_occidentales">Samoa occidentales</option>
<option value="Sao_Tome-et-Principe">Sao Tomé-et-Principe</option>
<option value="Senegal">Sénégal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra_Leone">Sierra Leone</option>
<option value="Singapour">Singapour</option>
<option value="Slovaquie">Slovaquie</option>
<option value="Slovenie">Slovénie</option>
<option value="Somalie">Somalie</option>
<option value="Soudan">Soudan</option>
<option value="Sri_Lanka">Sri Lanka</option>
<option value="Sued">Suède</option>
<option value="Suisse">Suisse</option>
<option value="Suriname">Suriname</option>
<option value="Swaziland">Swaziland</option>
<option value="Syrie">Syrie</option>
<option value="Tadjikistan">Tadjikistan</option>
<option value="Tanzanie">Tanzanie</option>
<option value="Tchad">Tchad</option>
<option value="Thailande">Thaïlande</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="Trinite-et-Tobago">Trinité-et-Tobago</option>
<option value="Tunisie">Tunisie</option>
<option value="Turkmenistan">Turkménistan</option>
<option value="Turquie">Turquie</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Ukraine">Ukraine</option>
<option value="Uruguay">Uruguay</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Viet_Nam">Viêt Nam</option>
<option value="Yemen">Yémen</option>
<option value="Yougoslavie">Yougoslavie</option>
<option value="Zaire">Zaïre</option>
<option value="Zambie">Zambie</option>
<option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
      

      <div className="col-md-3">
        <select class="form-control " id="exampleFormControlSelect1">
        <option>Buisness</option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        </select>
      </div>
        
        <div className="col-md-3">
        <Button className="btn w-70" >Search Expert</Button>
        </div>
    </div>
</div>
 </div>
 </div>

      
         
         
        
       
    )
}
export default Banner; 