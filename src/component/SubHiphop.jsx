import { useParams } from 'react-router-dom';
import { useProState } from '../stateContext';

function SubHiphop() {
  const { id } = useParams();
  const hiphopList = useProState()[0];

  const item = hiphopList.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{item.ttl}</h2>
      <img src={process.env.PUBLIC_URL + item.src} alt={item.ttl} />
      <p>가격: {item.price}</p>
    </div>
  );
}

export default SubHiphop;
