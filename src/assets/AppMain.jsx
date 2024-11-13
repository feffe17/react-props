import Card from "../components/Card"

export default function AppMain() {


    return (
        <main>
            <div className="container">
                <Card
                    title="Titolo del post"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam suscipit eius quidem, accusantium, corrupti nisi facilis quis libero molestias et veritatis asperiores saepe praesentium voluptates. Ex quidem laudantium ratione placeat!"
                    buttonText="Leggi di più"
                />
            </div>
        </main>
    )

}