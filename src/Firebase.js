import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  addDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase); // 공식문서의 db 변수

const initStation = async (stations) => {
  console.log(stations);

  stations.map(async (station) => {
    const stationRef = doc(fireStore, "station", `${station.station_cd}`);

    await setDoc(stationRef, { ...station, visited: false });
  });
};

const getAuthUsers = async () => {
  const userRef = collection(fireStore, "user");

  return await getDocs(userRef);
};

const getStations = async () => {
  const res = await getDocs(collection(fireStore, "station"));

  const stations = [];

  res.forEach((doc) => {
    stations.push(doc.data());
  });

  return stations;
};

const uploadNewPost = async (newPost) => {
  try {
    const docRef = await addDoc(collection(fireStore, "post"), {
      ...newPost,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    return false;
  }

  return true;
};

const getPostById = async (id) => {
  try {
    const docRef = doc(fireStore, "post", id);

    const result = await getDoc(docRef);

    return result.data();
  } catch (e) {
    console.log("error occured while retrieve posting");

    return null;
  }
};

const getPosts = async () => {
  const res = await getDocs(collection(fireStore, "post"));

  const posts = [];

  res.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });

  return posts;
};

export {
  fireStore,
  initStation,
  getAuthUsers,
  getStations,
  uploadNewPost,
  getPostById,
  getPosts,
};
