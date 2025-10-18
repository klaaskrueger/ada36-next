'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';

export default function GuidesPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/guides" />
      <main className="page-content">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">Objektinformationen - ADA36 Loft</h1>
              
              <div className="text">
                <h2>Adresse</h2>
                <p>Adalbertstraße 36, 10999 Berlin</p>

                <h2>Nichtraucher-Objekt</h2>
                <p>Das Loft ist ein Nichtraucher-Objekt. Rauchen ist nicht gestattet.</p>

                <h2>Banking & Finanzierung</h2>
                <p>Informationen zur Finanzierung und Bankgeschäften erhalten Sie bei Interesse.</p>

                <h2>Nachbarn</h2>
                <p>Bitte respektieren Sie die Ruhezeiten und seien Sie rücksichtsvoll gegenüber den Nachbarn.</p>

                <h2>Lüftung</h2>
                <p>Regelmäßiges Lüften ist wichtig für ein gesundes Raumklima.</p>

                <h2>Reinigung</h2>
                <p>Das Objekt sollte bei Übergabe in sauberem Zustand übergeben werden.</p>

                <h2>Notfallkontakte</h2>
                <p>Bei Notfällen wenden Sie sich an die Hausverwaltung oder die Notrufnummern.</p>

                <h2>Eingangsschlüssel</h2>
                <p>Alle Schlüssel sind bei der Übergabe zu übergeben.</p>

                <h2>Lebensmittel</h2>
                <p>Lebensmittel sollten vor der Übergabe entfernt werden.</p>

                <h2>Parkausweis</h2>
                <h3>Anmeldung erforderlich</h3>
                <p>Für Parkplätze ist eine Anmeldung bei der Hausverwaltung erforderlich.</p>

                <h2>Möbel</h2>
                <p>Alle Möbel sind Teil der Immobilie und bleiben beim Verkauf erhalten.</p>

                <h2>Internet & WLAN</h2>
                <p>Das Objekt ist mit WLAN ausgestattet.</p>

                <h2>Jogging</h2>
                <p>In der Umgebung gibt es viele Möglichkeiten zum Joggen und Sport treiben.</p>

                <h2>Bedienungsanleitungen</h2>
                <h3>Heizungsschalter</h3>
                <p>Die Heizung kann über die Thermostate in jedem Raum reguliert werden.</p>

                <h3>Kaffeemaschine</h3>
                <p>Bedienungsanleitung für die Kaffeemaschine liegt vor.</p>

                <h2>Haustiere</h2>
                <p>Haustiere sind nach Absprache möglich.</p>

                <h2>Öffentliche Verkehrsmittel</h2>
                <p>Gute Anbindung an U-Bahn, Bus und S-Bahn.</p>

                <h2>Restaurants</h2>
                <p>Viele Restaurants und Cafés in unmittelbarer Nähe.</p>

                <h2>Mülltrennung</h2>
                <p>Mülltrennung ist nach Berliner Standards vorgeschrieben.</p>

                <h2>Taxi</h2>
                <p>Taxi-Services sind in der Umgebung verfügbar.</p>

                <h2>Wäsche</h2>
                <p>Waschmöglichkeiten sind in der Umgebung vorhanden.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}