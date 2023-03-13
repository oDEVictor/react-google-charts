import styled from "@emotion/styled";
const HeaderStyle = styled.div`
  #header {
    width: 100vw;
    position: sticky;
    top: 0;
    padding: 35px;
    /* margin-bottom: 10px; */
    color: #FDFDFF;
    z-index: 10;
  }

  .title {
    text-align: center;
    /* position: absolute; */
    width: 100vw;
    align-self: center;
  }

  .divider {
    border: 1px solid #FDFDFF;
    display: block;
    height: 0px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .logo {
    height: 70px;
    width: 216px;
  }


  .header-top {
    height: 50%;
    min-height: 70px;
  }

  .header-bottom {
    height: 50%;
    min-height: 20px;
  }

  .color-1 {
    background: linear-gradient(90deg, #4D4E82 3.8%, #6F72C1 97.27%);
  }

  .color-2 {
    background: linear-gradient(90deg, #064149 3.8%, #17A64A 97.27%);
  }

  .color-3 {
    background: linear-gradient(90deg, #1B4973 3.8%, #1784A6 97.27%);
  }

`;

export default HeaderStyle;