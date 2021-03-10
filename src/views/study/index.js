import '../../../styles.css';

import studyData from './study.json';
import { createApp } from 'vue'

const studyDir = {
    data() {
        return {
            studyDirArr: Object.keys(studyData)
        };
    },
}

createApp(studyDir).mount('#studyDir');

console.log(Object.values(studyData))
const studyContent = {
    data() {
        return {
            studyContentArr: Object.values(studyData),
            studyDirArr: Object.keys(studyData)
        }
    }
}

createApp(studyContent).mount('#studyContent')