import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>aaa.aaa.com</dd>
        <dt>TEL</dt>
        <dd>00-000-0000</dd>
        <dt>会社名</dt>
        <dd>ヴァリアント</dd>
        <dt>WEB</dt>
        <dd>123.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
