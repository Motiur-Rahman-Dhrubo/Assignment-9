import 'animate.css';
import { useState, useEffect } from 'react';

const Faq = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('/faqs.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="lg:pt-14 md:pt-10 pt-6 w-11/12 mx-auto">
            <h2 className="animate__animated animate__bounce animate__slower animate__repeat-3 lg:text-5xl md:text-3xl text-xl text-center font-bold">Frequently Asked Questions:</h2>
            <div className="flex flex-col lg:gap-4 md:gap-3 gap-2 lg:pt-8 md:pt-6 pt-4">
                {faqs.map(faq => (
                    <div key={faq.faq_id} className="collapse collapse-arrow bg-white shadow-md border rounded-md lg:p-4 md:p-2 p-0">
                        <input type="radio" name="my-accordion-1" defaultChecked={faq.faq_id === 1} />
                        <div className="collapse-title text-xl font-medium">{faq.faq_question}</div>
                        <div className="collapse-content">
                            <p className="text-gray-600">
                                {faq.faq_answer.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;