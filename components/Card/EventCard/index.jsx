import Card from "@/components/Card";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EventCard = ({ children, title, description, ...props }) => {
  return (
    <>
      <Card.Normal className={"flex flex-row p-8 justify-between"} {...props}>
        <CardHeader
          className={
            "flex flex-col gap-2 justify-center text-milkwhite text-right"
          }>
          <CardTitle className={"font-normal text-xs"}>{title}</CardTitle>
          <CardDescription
            className={
              "font-normal text-[0.5rem] leading-[0.67875rem] text-milkwhite"
            }>
            {description}
          </CardDescription>
        </CardHeader>
        {/*<CardContent> </CardContent>*/}
        {/*<CardFooter> </CardFooter>*/}
      </Card.Normal>
    </>
  );
};

export default EventCard;
