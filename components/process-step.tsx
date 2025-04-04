import RetroCard from "./retro-card"

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <RetroCard className="h-full">
      <div className="flex items-start gap-4">
        <div className="text-4xl font-bold text-gray-300 dark:text-gray-600">{number}</div>
        <div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </RetroCard>
  )
}

