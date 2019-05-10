import { useEffect, useState } from 'react';

export function useQuestionIndex(questions, currentQuestion) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(questions.map(item => item.id).indexOf(currentQuestion.id));
        return () => null;
    }, [questions, currentQuestion]);
    
    return index;
}