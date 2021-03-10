import '../../../styles.css';

import playData from './play.json';
import { createApp } from 'vue'

const playDir = {
    data() {
        return {
            playDirArr: Object.keys(playData)
        };
    },
}

createApp(playDir).mount('#playDir');

console.log(Object.values(playData))
const playContent = {
    data() {
        return {
            playContentArr: Object.values(playData),
            playDirArr: Object.keys(playData)
        }
    }
}

createApp(playContent).mount('#playContent')