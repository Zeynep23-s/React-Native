import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

class App extends Component {
  state = {
    search: '',
  };

  filterList(list) {
    return list.filter(listItem =>
      listItem.toUpperCase().includes(this.state.search.toUpperCase()),
    );
  }
  render() {
    const list = [
      'Pepsi',
      'Coca Cola',
      'Fanta',
      'Yedigün',
      'Su',
      'Çay',
      'Kahve',
      'Gazoz',
      'Enerji İçeceği',
      'Elma',
      'Armut',
      'Biber',
      'Çilek',
      'Domates',
      'Patates',
      'Limon',
      'Muz',
      'Patlıcan',
      'Soğan',
      'Salatalık',
      'Ispanak',
      'Havuç',
      'Mantar',
      'Kabak',
      'Cips',
      'Patlamış Mısır',
      'Kurabiye',
      'Puding',
      'Çikolata',
      'Şeker',
      'Tatlı',
      'Sakız',
      'Kek',
      'Kraker',
      'Baklava',
      'Kurutulmuş Meyve',
      'Zeytin',
      'Beyaz Peynir',
      'Süt',
      'Yumurta',
      'Margarin',
      'Kaşar Peyniri',
      'Tereyağ',
      'Yoğurt',
      'Reçel',
      'Helva',
      'Bal',
      'Çikolata',
      'Pekmez',
      'Mısır Gevreği',
      'Fıstık Ezmesi',
      'Fındık Ezmesi',
      'Pastırma',
      'Sosis',
      'Sucuk',
      'Salam',
      'Bütün Tavuk',
      'Piliç Baget',
      'Piliç Bonfile',
      'Kuşbaşı',
      'Antrikot',
      'Kıyma',
      'Jambon ',
      'Balık ',
      'Biftek',
      'Köfte ',
      'Erişte ',
      'İrmik ',
      'Kuskus ',
      'Makarna ',
      'Nohut ',
      'Pirinç ',
      'Tahıl ',
      'Un',
      'Mercimek ',
      'Yulaf Ezmesi ',
      'Kuru Fasulye',
      'Pilavlık Bulgur',
      'Yeşil Mercimek ',
      'Köftelik Bulgur',
      'Bezelye',
      'Şehriye',
      'Arpa',
      'Mısır',
      'Çorba',
      'Haşlanmış Fasulye ',
      'Mantı ',
      'Lazanya ',
      'Piza ',
      'Patates Kızartması ',
      'Dondurma ',
      'Milföy Hamuru',
      'Ton Balığı ',
      'Fasulye Pilaki ',
      'Dondurulmuş Sebze ',
      'Çörek  ',
      'Ekmek ',
      'Lavaş',
      'Simit',
      'Waffle',
      'Pankek',
      'Muffin',
      'Turta',
      'Tost Ekmeği',
      'Pizza Hamuru',
      'Tortilla',
      'Kruvasan',
      'Donut',
      'Poğaça',
      'Açma',
      'Hamur Kızartması',
      'Diş Fırçası',
      'Diş Macunu',
      'Diş İpi',
      'Duş Jeli',
      'El Kremi',
      'Şampuan',
      'Deodorant',
      'Güneş Kremi ',
      'Pamuk',
      'Parfüm',
      'Islak Mendil',
      'Kuru Mendil ',
      'Oje',
      'Tıraş Bıcağı',
      'Tıraş Köpüğü',
      'Tuvalet Kağıdı ',
      'Yara Bandı ',
      'Yüz Kremi ',
      'Saç boyası ',
      'Saç Kremi',
      'Saç Kremi',
      'Vitamin ',
      'Sabun',
      'Makyaj Temizleyici',
      'Kulak Çubuğu ',
      'Aseton ',
      'Dezenfektan',
      'Bakım Yağı ',
      'Tırnak Makası',
      'Balık Yemi',
      'Kedi Kumu',
      'Kedi Maması',
      'Köpek Maması',
      'Kuş Yemi ',
      'Evcil Hayvan Oyuncakları ',
      'Yaş Mama',
      'Tasma',
      'Ödül Maması',
      'Taşıma Çantası ',
      'Akvaryum ',
      'Bebek Yağı  ',
      'Emzik ',
      'Biberon',
      'Biberon',
      'Pudra ',
      'Bebek Şampuanı  ',
      'Pamuk ',
      'Ek Gıdalar',
      'Bebek Bisküvi ',
      'Bebek Bisküvi ',
      'Krem',
      'Ampul',
      'Banyo Temizleyici',
      'Çöp Torbası ',
      'Bulaşık Deterjanı',
      'Çamaşır Deterjanı',
      'Kağıt Havlu',
      'Kağıt Havlu',
      'Mum',
      'Peçete',
      'Pişirme Kağıdı',
      'Pil',
      'Temizlik Malzemeleri',
      'Yumuşatıcı ',
      'Mangal Malzemeleri',
      'Streç Film',
      'Piknik Malzemeleri',
      'Sünger  ',
      'Düdüklü Tencere',
      'Tava',
      'Ayçiçek Yağı',
      'Zeytin Yağı',
    ];
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <FontAwesome5 style={styles.searchIcon} name="search" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Ürün Arama.."
              onChangeText={search => this.setState({search})}
            />
            <FontAwesome5
              style={styles.basketIcon}
              name="shopping-basket"
              size={20}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.urunlerTitle}> Ürünler:</Text>
            <ScrollView>
              {this.filterList(list).map((listItem, index) => (
                <TouchableOpacity>
                  <Text key={index} style={styles.itemText}>
                    {listItem}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.body2}>
            <Text style={styles.listeTitle}> Listem:</Text>
            <ScrollView>
              <TouchableOpacity></TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.footerTitles}>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerTitles}>Hakkında</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 20,
    fontSize: 20,
    width: 250,
    backgroundColor: 'white',
  },
  basketIcon: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  body: {
    flex: 2,
    backgroundColor: 'white',
  },
  urunlerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemText: {
    height: 35,
    fontSize: 20,
    borderWidth: 1,
  },
  body2: {
    flex: 2,
    backgroundColor: 'white',
  },
  listeTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listeText: {
    height: 35,
    fontSize: 20,
    borderWidth: 1,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
    height: 50,
    backgroundColor: 'orange',
  },
  footerTitles: {
    paddingTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 197,
    height: 50,
  },
});
