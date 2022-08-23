import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemUpdateStyle from './ItemUpdateForm.module.css';
import { callUpdateItemAPI } from '../../apis/ItemAPICall';

function ItemUpdateForm() {

    const result = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* 등록시 입력 값 state 저장 */
    const [updateItem, setUpdateItem] = useState(
        {
            userid: parseInt(localStorage.getItem('userId')),
            id: 0,
            itemName: '',
            itemPrice: 0,
            detail: {
                description: '',
                image: '',
                link: ''
            }
        }
     );

     /*----- 개발중------ */

     const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        console.log(e.target.value)
        setUpdateItem(
            {
                ...updateItem,
                [name] : value
            }
        );
    
     }

         /* 파일 첨부 시 동작하는 이벤트 핸들러 */
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertBase64(file);
        console.log(base64);
        setUpdateItem( //이벤트핸들러가 동작했을때 그 값들을 다시금 설정하는 친구
            {
                ...updateItem,
                detail : {
                    description : updateItem.detail.description,
                    image : base64,
                    link : updateItem.detail.link
                }
            }
        );
    }

    const convertBase64 = (file) => { //비동기적 처리를 관리하기 위해 promise
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file) //방금 첨부되어있던 파일을 읽어옴
          fileReader.onload = () => { //파일을 읽어들이눈 onload
            resolve(fileReader.result); //잘 읽어내면 반환함
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

    //   useEffect(
    //     () => {
    //         /* 메뉴 등록 완료 확인 후 /menu로 이동 */
    //         if(result.updateItem) {
    //             alert('아이템 등록');
    //             navigate(`/itemlist/mylist`);
    //         }
    //     },
    //     [result]
    //   );

      const onClickHandler = () => {
        /* updateItem에 대한 유효성 검사 후 호출 */
        dispatch(callUpdateItemAPI(updateItem));
        alert('등록되었습니다.');
        navigate(`/itemlist/mylist`);
    }



    /*--- 여기까지----*/

    return (
        <div className={ ItemUpdateStyle.itemUpdateList }>
            <label>제품 이름 : </label>
            <input required type="text" name="itemName" value={ updateItem.itemName } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>제품 가격 : </label>
            <input required type="number" name="itemPrice" value={ updateItem.itemPrice } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>바로가기 주소 : </label>
            <input required type="text" name="link" value={ updateItem.detail.link.value } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>설명 : </label>
            <textarea name="description" value={ updateItem.detail.description.value } onChange={ onChangeHandler }></textarea>
            <br/>
            <br/>
            <label>사진 : </label>
            <input 
                type="file"
                name="image"
                accept='image/*'
                value={ updateItem.detail.image.value }
                onChange={ fileChangeHandler }/>
            <br/>
            <br/>
            <button className={ ItemUpdateStyle.itemUpdateButton } onClick={ onClickHandler }>위시리스트 등록</button>
            

        </div>
    );
}

export default ItemUpdateForm;