import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonList, IonLabel} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <IonButton routerLink='/page-3'>
            <IonLabel>page-3</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-4'>
            <IonLabel>page-4</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-5'>
            <IonLabel>page-5</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-6'>
            <IonLabel>page-6</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-10-11'>
            <IonLabel>page-10-11</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-12'>
            <IonLabel>page-12</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-13'>
            <IonLabel>page-13</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-14'>
            <IonLabel>page-14</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-19'>
            <IonLabel>page-19</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-21'>
            <IonLabel>page-21</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-22'>
            <IonLabel>page-22</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-23-24-25'>
            <IonLabel>page-23-24-25</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-28-29'>
            <IonLabel>page-28-29</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-32-33'>
            <IonLabel>page-32-33</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-34-35'>
            <IonLabel>page-34-35</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-36-37'>
            <IonLabel>page-36-37</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-38'>
            <IonLabel>page-38</IonLabel>
          </IonButton>
        </IonList>
        <IonList>
        <IonButton routerLink='/page-39'>
            <IonLabel>page-39</IonLabel>
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
