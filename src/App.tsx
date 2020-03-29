import React from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react";

// User Defined Components 
import Assignment from './components/Assignment';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      {/* Header  */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle size="large">GEU Left Overs</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content  */}
      <IonContent>

        <Assignment heading="Maths Assignment" details="Some information about maths assignment" deadline="31st March 2020 11:59pm" priority="URGENT"/>
        <Assignment heading="Maths Assignment" details="Some information about maths assignment" deadline="31st March 2020 11:59pm" priority="URGENT"/>
        <Assignment heading="Maths Assignment" details="Some information about maths assignment" deadline="31st March 2020 11:59pm" priority="URGENT"/>
        <Assignment heading="Maths Assignment" details="Some information about maths assignment" deadline="31st March 2020 11:59pm" priority="URGENT"/>


      </IonContent>


    </IonPage>
  </IonApp>
);

export default App;
