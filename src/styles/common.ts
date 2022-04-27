import styled from 'styled-components';

const LogOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  padding-left: 10px;
  height: 40px;
  .logout {
    padding-left: 5px;
    &:hover {
      color: #ff7a45;
    }
  }
`;

const NotFoundPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .404 {

  }
`;

const LayoutHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .header_left {
    flex: 1 1 0%;
  }
`;

const HeaderRight = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export {
  LogOut, NotFoundPage, LayoutHeader, HeaderRight
};
