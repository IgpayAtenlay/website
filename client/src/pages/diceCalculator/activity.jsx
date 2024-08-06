import Result from './result';
import Form from './form';
import { useContext } from 'react';
import { ActivityContext } from '.';

export default function Activity(props) {
  var activity = useContext(ActivityContext);
  var num = props.index + 1;

  return(
    <section aria-labelledby={activity.id + "label"}>
      <h1 id={activity.id + "label"}>Activity {num}</h1>
      <button id={activity.id + "deleteButton"} onClick={props.removeActivity} className='deleteButton' aria-label={'delete activity ' + num}>X</button>
      <Form />
      <hr />
      <Result />
    </section>
  );
}