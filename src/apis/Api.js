import axios from 'axios';

const DOMAIN = 'http://localhost:4000';

export const request = async (method, url, data) => {
    return await axios({
        method, /*GET, POST, PUT, ... 을 확인하는 구간*/
        url : `${DOMAIN}${url}`, /* /menu 인지 /menu/1 인지 /user인지 /user/1인지 */
        data // 수정할 메뉴 나 새로 삽입할 메뉴 등
    })
      .then(res => res.data) //data를 뽑았을 때 나오는 값을 반영할수 있도록 작성
      .catch(error => console.log(error));
};
