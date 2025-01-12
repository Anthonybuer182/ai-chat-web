'use client'
import {Steps} from '../_component/step'; 
import { useState } from 'react';
export default function Create() {
    const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div>
            <Steps steps={steps} currentStep={currentStep} />
        </div>
    );
}