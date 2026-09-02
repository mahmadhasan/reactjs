import { useParams} from "react-router-dom";

export function ReactToturial(){
    let params = useParams();

    
    return(
        <div>
            <h2> React Tutorial</h2>
            <dl>
                <dt>Topic</dt>
                <dd>{params.topic}</dd>

                <dt>SubTopic</dt>
                <dd>{params.subtopic}</dd>

                <dt>Duration</dt>
                <dd>{params.duration}</dd>
            </dl>
        </div>
    )
}