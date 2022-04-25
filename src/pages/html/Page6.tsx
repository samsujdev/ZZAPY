import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonList, IonLabel, IonBackButton} from '@ionic/react';
import './Page6.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
        <IonBackButton defaultHref="/home">Back To Home</IonBackButton>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Page 6</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
