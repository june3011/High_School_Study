import * as S from "./style";

const List = () => {
  return (
    <S.ListContainer>
      <S.ListTr>
        <S.ListTh>id</S.ListTh>
        <S.ListTh>이름</S.ListTh>
        <S.ListTh>나이</S.ListTh>
        <S.ListBtnTh></S.ListBtnTh>
        <S.ListBtnTh></S.ListBtnTh>
      </S.ListTr>
      <S.ListTr>
        <S.ListTd>더미아이디</S.ListTd>
        <S.ListTd>더미이름</S.ListTd>
        <S.ListTd>더미나이</S.ListTd>
        <S.TdButtonWrap>
          <S.ListBtnTd TdButtonType="modify">수정</S.ListBtnTd>
          <S.ListBtnTd TdButtonType="cancle">삭제</S.ListBtnTd>
        </S.TdButtonWrap>
      </S.ListTr>
    </S.ListContainer>
  );
};

export default List;
