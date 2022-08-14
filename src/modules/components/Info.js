import React, { useEffect } from 'react';
import './Info.css';

function Info (){

    return (
        <div className="MUN-Info">
            <h1 className="MUN-Info-heading">Model United Nation</h1>
            <p className="MUN-Info-text">
                <a href="https://en.wikipedia.org/wiki/Model_United_Nations" 
                title="MUN hyperlink">Model United Nations </a>
                is an academic simulation of the United
                Nations where students play the role of delegates from different
                countries and attempt to solve real world issues with the policies and
                perspectives of their assigned country. For example, a student may be
                assigned the United Kingdom and will have to solve global topics such
                as nuclear non-proliferation or climate change from the policies and
                perspectives of the United Kingdom.<br></br><br></br>
                Once a team has registered for a conference, it receives a country to
                represent. Each student on that team will represent that country in a
                different committee with different topics. For example, A team could
                be assigned China and have different students representing China in
                the disarmament committee, the human rights committee, the
                development committee, and so forth. Schools with larger teams will
                receive additional countries.<br></br><br></br>
                There are no standards in Model UN and different conferences may
                run their debate and rules of procedure differently. We will be using
                the UN4MUN procedure to conduct ours. You will be given a
                simplified rule book (set of rules *there are only 5) later.
                Preparing and participating in a MUN helps students develop
                leadership skills, research, writing, public speaking, and
                problem-solving skills. Moreover, coming up with solutions that are
                acceptable to a majority of the representatives also inculcates skills of
                negotiation, conflict resolution, and cooperation.    
            </p>
        </div>
    )
}

export default Info;
