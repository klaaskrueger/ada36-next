import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Guest guide and information for Ada36 Studio - Everything you need to know about your stay',
};

export default function GuidesPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/guides" />
      <main className="page-content">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">Guides</h1>
              
              <div className="text">
                <h2>Address</h2>
                <p>In case you want to receive letters the correct postal address is:<br />
                (your name) c/o Klaas Krüger Adalbertstr 36, 10179 Berlin, Germany</p>

                <h2>Smoking</h2>
                <p>This Apartment is a non-smoker apartment. If you want to smoke you can do this outside in the backyard area. There are fire detectors in the apartment. The detectors are functional until 2026. If they are activated by steam on error just press them firmly in the ceiling direction. In case of fire please leave the apartment immediately for your own security.</p>

                <h2>Bank</h2>
                <p>The next cashpoint is at the next house to the left. Further banks you find at the Kottbusser Tor and at Ostbahnhof.</p>

                <h2>Neighbours</h2>
                <p>Please have consideration for the other persons who live in this building and respect the rest hours. They are daily from 12.am until 3pm and from 10pm until 7am. During this time it is not allowed to make noise( loud music, vacum cleaning et cetera). Take care that the television is on a normal volume that doesn&apos;t disturb other parties of the house during this time.</p>

                <h2>Ventilation</h2>
                <p>This is a typical after war building, in this kind of buildings it&apos;s very important to ventilate the rooms at least 2 times a day (depending from how many persons are in it and the hight of temperature in the apartment. Higher temperatures need more ventilation) The appropriate method to ventilate the apartment right is by opening the windows of the rooms completely for about 5 until 10 minutes. If you just tilt the windows it doesn&apos;t ventilate well and the walls are getting cold, you need more energy and doesn&apos;t get a good temperature and indoor climate in your apartment. If you don&apos;t ventilate the apartment it could get moldy.</p>

                <h2>Cleaning</h2>
                <p>We hope you treat the apartment with care, we completely cleaned the apartment before your moving in and hope everything is ok, if not just let us know. During your stay you are responsible for cleaning the apartment by yourself. We provide you with a starter set of cleansing material like: swap, vacuum cleaner, rags and several polish. The wooden flor needs a special cleaning liquid that is provided.</p>

                <h2>Emergency</h2>
                <p>In case of emergency you can call the police at 110 the fire department and the hospital at 112. If case of an emergency that is related to the house please call Proline Immo at +49 30 85951630 If something isn&apos;t working inside the apartment you can call Klaas Krüger +491731654797</p>

                <h2>Entrance & Keys</h2>
                <p>The secondary key is installed upside down. So it will work in the opposite direction. When you close the entrance door from outside it may be difficult without slamming the door. The trick is: Just lift the doorknob a little bit and it will close smoothly.</p>

                <h2>Food</h2>
                <p>There are several supermarkets in walking distance to your apartment. One is REWE in the basement of the Ostbahnhof that is opened around the clock even on Sundays. Discounters like Aldi you find also near the Engelbecken. For more information please look into the map on the <a href="/neighbourhood">neighbourhood page</a>.</p>

                <h2>Parking Permit</h2>
                <h3>Official Form for Online Permit Ordering in Berlin</h3>
                <p><a href="https://service.berlin.de/dienstleistung/121721/standort/122280/" target="_blank" rel="noopener noreferrer">service.berlin.de</a></p>
                <p>The permit requires the vehicle registration certificate and costs 20 Euro for one year. It is available for secondary residents as well and will be sent to the Adalbertstr within 2 weeks.</p>
                <p>Print out the online permit application receipt and place it behind your windshield. I was told this &quot;could&quot; help against fines</p>

                <h2>Furniture</h2>
                <p>This apartment is completely furnished. Please treat it with care. It could always happen that a glas falls down and is broken, we will not charge that, don&apos;t bother that happens to everybody. But in case that our guest damage the furniture by violation or wrong use we will charge it. In case you replace the furniture please take care that everything is back on his original place on the day you are moving out.</p>

                <h2>Internet WIFI</h2>
                <p>There is an internet connection provided in this apartment. The Wifi&apos;s name is Ada36 The login password you find in the Wifi locker at the right side of the kitchen. Although the internet is declared we cannot guarantee a constantly accessibility or a disorder at the provider. Disorders cannot be charged and we don&apos;t assume liability for that. Transmission of any material in violation of any international, German or state law is prohibited. This includes, but is not limited to: copyrighted material, threatening, harassing or obscene material, or material protected by trade secret. Any attempt to break the law while using our Internet account may result in litigation against the offender by the proper authorities. If such an event should occurs, we will fully comply with the authorities to provide any information necessary for the litigation process.</p>

                <h2>Jogging</h2>
                <p>If you like to jog we can recommend to jog along the Spree river. A map of the recreation areas is provided on the Area Map on the neighbourhood page.</p>

                <h2>Manuals</h2>
                <p>Several manuals of the apparatus you find above the fridge. In case there is no manual and you need an explanation we can provide pdfs on this guides page.</p>

                <h3>Heating Switches</h3>
                <p>The heatings have a wheel to dial the preferred room temperature in degrees Celsius. To confirm the temperature press the wheel firmly.</p>
                <p><a href="https://www.eq-3.com/Downloads/eq3/downloads_produktkatalog/eqiva/bda/CC-RT-N-EQ_UM_GE_eQ-3_170531.pdf" target="_blank" rel="noopener noreferrer">Heating Manual</a></p>

                <h3>Coffee Machine</h3>
                <p>Review Krups EA8108</p>
                <p><a href="https://www.youtube.com/watch?v=pcDvSwqWUbc" target="_blank" rel="noopener noreferrer">Review Krups EA8108 on Youtube</a></p>

                <h2>Pets</h2>
                <p>Although we love pets by ourselves it isn&apos;t allowed to keep any animals in the apartment.</p>

                <h2>Public transport</h2>
                <p>The Ostbahnhof station is about 700 meters from this apartment. More Info: <a href="https://bahn.de" target="_blank" rel="noopener noreferrer">Deutsche Bahn</a></p>
                <p>Google maps provides excellent displays of the public transport routes in Berlin.</p>

                <h2>Restaurants</h2>
                <p>In Kreuzberg there are several good restaurants and wine bars, the most of them you find on the web page</p>

                <h2>Separation of waste</h2>
                <p>In Germany waste will be separated. We separate waste by biological, paper, yellow bag, glas and others. In the backyard of the building stand several bins for separating the waste. Please separate the waste. In the apartment we provides you with and normal bin liner for others as well as several yellow bags they are for cans, plastic, polystyrene, aluminum, tinplate and &quot;composite&quot; materials like beverage cartons made of a mixture of materials.</p>

                <h2>Taxi</h2>
                <p>Taxi Berlin Phone<br />
                +49 30 210101</p>
                <p>But the apps of <strong>Freenow</strong> and <strong>Uber</strong> work, too.</p>

                <h2>Washing</h2>
                <p>In the bathroom you find the washer and a drying rack. Please try to dry the clothes outside on the balcony. The tap water is of drinking quality. There is a filtered water tap for water that has better taste. Important to know is that the water in Berlin contains much of lime/chalk. You will see it after using the shower and fittings. We will ask our guest to regulary clean the fittings and wall tiles since if this doesn&apos;t happen a chalk bed will come and it isn&apos;t possible to remove it then.</p>

                <p>We hope you enjoy your time in The apartment. If there are any questions just let us know.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}