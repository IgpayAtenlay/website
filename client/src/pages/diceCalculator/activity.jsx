import Result from './result';
import Form from './form';
import { useContext } from 'react';
import { ActivityContext } from '.';

export default function Activity(props) {
  var activity = useContext(ActivityContext);

  return(
    <section>
      <h1>Activity {props.index + 1}</h1>
      <button id={activity.id} onClick={props.removeActivity} className='deleteButton' aria-label='delete activity'>X</button>
      <Form />
      <hr />
      <Result />
    </section>
  );
}