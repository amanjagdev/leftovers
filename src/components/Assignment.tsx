import React from "react";
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonButton,
  IonItem
} from "@ionic/react";
import { document } from "ionicons/icons";

const Assignment: React.FC<{
  heading: string;
  priority: string;
  details: string;
  deadline: string;
}> = props => {
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={document} slot="start" />
        <IonLabel>{props.heading}</IonLabel>
        <IonButton fill="outline" slot="end" color="danger">
          {props.priority}
        </IonButton>
      </IonItem>

      <IonCardContent>
        {props.details}
        <br />
        <b>Deadline : {props.deadline}</b>
      </IonCardContent>
    </IonCard>
  );
};

export default Assignment;
