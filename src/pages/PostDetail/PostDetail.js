import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { useParams } from "react-router-dom";

const sampleData = `# React useState
### 상태관리란?
웹페이지 상에서 눈으로 확인할 수 있는 모든 데이터뿐 아니라 서버와 주고받는 눈으로 확인할 수 없는 모든 데이터를 **상태**라 하고 이 변화하는 상태들을 관리하는 것을 **상태관리**라고 합니다.

즉, 인스타그램에서 좋아요를 눌렀을 때, 댓글을 달았을 때, 게시글을 저장하였을 때 모두 상태가 변화합니다.
이때, 이러한 상태가 변화하는 것들을 관리하는 것을 **상태관리**라고 합니다.

### 상태관리를 해야하는 이유

만약 인스타그램에서 어떤 게시글에 좋아요를 눌렀을 때 1이 증가 되지 않는다거나, 댓글을 달았지만 댓글 수가 증가하지 않았다거나하는 일이 생긴다면 어떨까요?

많은 곳에서 상태가 변화하는데, 이는 웹사이트가 커질수록 여러 상호작용이 생기고 이를 관리하는 것은 더 힘들어집니다.

이러한 이유 때문에 상태관리를 할 때는 동일한 데이터는 한 곳에서만 가져와 사용해야합니다.

이를 React에서는 useState를 사용하여 다른 컴포넌트에서 같은 데이터가 필요할 경우 편리하게 상태관리를 할 수 있을 것입니다.

### 상태관리

\`\`\`js
// import React from 'react';
import { useState } from 'react';
\`\`\`
를 선언하여 사용하며


\`\`\`js
// React만 선언했을 경우
const [count, setCount] = React.useState(0);

// useState로 선언했을 경우
const [count, setCount] = useState(0);
\`\`\`
로 상태관리를 합니다.

위의 예제는 초기값 0을 가지고 있는 변수 count와 이를 변경할 수 있는 함수 setCount를 선언하는 것입니다.

\`\`\`js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <div>
      	{ count }
      </div>
      <button onClick={() => { setCount(count+1) }}>증가</button>
    </div>
  );
}

export default App;
\`\`\`
위의 예제를 살펴보면 브라우저에 App 컴포넌트가 렌더링 될 경우 count 값을 반환하며 이를 반영하기 때문에 count 값은 상태라고 할 수 있습니다.
그래서 버튼을 클릭하여 setCount 함수로 count 값을 증가시키면 애플리케이션 렌더링에 영향을 주며 동적으로 변화하는 것을 볼 수 있습다.

### 상태끌어올리기

상태끌어올리기는 여러 컴포넌트에서 같은 값(상태)을 변경시킬 경우 사용하는 건데요.
이것은 부모에 여러 컴포넌트에서 변경시킬 같은 값(상태)을 선언하여 공유하여 사용합니다.

\`\`\`js
import { useState } from 'react';

function Example1({ count, setCount }) {
  return(
    <div>
      <div>
      	{ count }
      </div>
      <button onClick={() => { setCount(count+1) }}>증가</button>
    </div>
  );
}

function Example2({ count, setCount }) {
  return(
    <div>
      <div>
      	{ count }
      </div>
      <button onClick={() => { setCount(count+1) }}>증가</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <Example1 count={ count } setCount={ setCount } />
      <Example2 count={ count } setCount={ setCount } />
    </div>
  );
}

export default App;
\`\`\`
위의 예제를 보면 count라는 값과 setCount 라는 함수가 부모 App이라는 컴포넌트에 선언되어 Example1, Example2 라는 자식 컴포넌트에 props를 통해 공유되어 사용되고 있습니다.
이를 실행하면 Example1 에서 count 값을 증가시켰을 때 Example2 에 있는 count 값이 함께 변경되는 것을 확인 할 수 있습니다. Example2 에서 하는 것 또한 마찬가지입니다.

### 참조
https://sambalim.tistory.com/140

https://mingule.tistory.com/74

https://velog.io/@longroadhome/FE-리액트-상태관리-1부
`;

const Post = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container" style={{ padding: "60px 0", height: "auto" }}>
      <MDEditor.Markdown style={{ padding: 10 }} source={sampleData} />
    </div>
  );
};

export default Post;
