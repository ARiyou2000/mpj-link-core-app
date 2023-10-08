"use client";

import CurvedProgressCounter from "@/components/CurvedProgressCounter";
import { RadioGroup, RadioGroupItem } from "../../ui/thermostat-radio-group";
import { useState } from "react";
import { Snow, Steams } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import Carousel from "@/components/Carousel";
import LoadingText from "@/components/loading/LoadingText";

const fanSpeedsDataTable = [
  { value: "00", name: <LoadingText /> },
  { value: "01", name: <h4>کم</h4> },
  { value: "02", name: <h4>متوسط</h4> },
  { value: "03", name: <h4>زیاد</h4> },
  { value: "04", name: <h4>خودکار</h4> },
];
const OPTIONS = { dragFree: true, loop: true };

const Thermostat = ({
  className,
  registersList = [],
  registerUpdateHandler = async (registerPublicId, value) => null,
  ...props
}) => {
  // const [
  //   seasonModeRegister,
  //   fanSpeedRegister,
  //   setPointTempRegister,
  //   currentTempRegister,
  //   powerRegister,
  // ] = registersList;
  const seasonModeRegister = registersList?.find(
    (register) => register.number === 1,
  );
  const fanSpeedRegister = registersList?.find(
    (register) => register.number === 2,
  );
  const targetTempRegister = registersList?.find(
    (register) => register.number === 4,
  );
  const currentTempRegister = registersList?.find(
    (register) => register.number === 5,
  );
  const powerRegister = registersList?.find(
    (register) => register.number === 7,
  );

  const power = powerRegister?.value === "02";

  const [loading, setLoading] = useState(false);

  const updateRegister = async (registerPublicId, value) => {
    setLoading(true);
    await registerUpdateHandler(registerPublicId, value);
    setLoading(false);
  };

  return (
    <>
      <ScrollArea className={className}>
        <div
          className={"h-full flex flex-col justify-center gap-11 pb-5"}
          {...props}>
          <CurvedProgressCounter
            currentTemperature={parseInt(currentTempRegister?.value)}
            targetTemperature={parseInt(targetTempRegister?.value)}
            onTargetTemperatureChange={(value) => {
              updateRegister(targetTempRegister?.publicId, value.toString());
            }}
            power={power}
          />

          <div className={"p-6 flex flex-col gap-2.5"}>
            <RadioGroup
              // defaultValue="option-one"
              value={power && seasonModeRegister?.value}
              onValueChange={(value) => {
                updateRegister(seasonModeRegister?.publicId, value);
              }}
              className={"flex flex-row items-center gap-2.5"}
              disabled={!power}>
              <RadioGroupItem
                value="02"
                id="cold_02"
                seasonType={"cold"}
                className={""}>
                <h3>سرمایش</h3>
                <Snow className={"h-6 w-6"} />
              </RadioGroupItem>

              <RadioGroupItem
                value="03"
                id="hot_03"
                seasonType={"hot"}
                className={""}>
                <h3>گرمایش</h3>
                <Steams className={"h-6 w-6"} />
              </RadioGroupItem>
            </RadioGroup>

            <Carousel
              slides={fanSpeedsDataTable?.map((fanSpeed) => fanSpeed.name)}
              disabled={!power}
              valueIndex={parseInt(fanSpeedRegister?.value)}
              onChange={(index) => {
                updateRegister(
                  fanSpeedRegister?.publicId,
                  fanSpeedsDataTable[index].value,
                );
              }}
              className={"border-1.5"}
            />
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default Thermostat;
