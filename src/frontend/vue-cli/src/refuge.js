let rooms = [];
import fs from 'fs'
export default {
    methods: {
        readFromFile(fileName) {
            let json = fs.readFileSync(fileName, 'utf8');
            return json;
        },
        refuge() {
          let json = readFromFile('rooms.json');
          return JSON.parse(json);
        }
    }
}
window.refuge = refuge;