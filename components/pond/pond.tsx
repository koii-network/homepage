import { Button } from "@/components/ui/Button";
import { IconsRow } from "./components/icon-row";
import { Iconlink } from "./components/IconLink";
import {
  bottoIconsFirstRow,
  bottoIconsSecondRow,
  partnersFirstRow,
  partnersSecondtRow,
} from "./linksConfig";

export const Pond = () => (
  <div className="relative">
    <div className="flex justify-center item-center mb-30">
      <h2 className="text-5xl text-center text-dark-blue leading-[72px]">
        Dive in, the pond is
        <br />
        filling fast.
      </h2>
    </div>

    <div className="pt-[380px] pond">
      <div className="z-10 flex flex-col items-center justify-center">
        <IconsRow>
          {partnersFirstRow.map(({ name, iconSrc, url }) => (
            <Iconlink url={url} iconSource={iconSrc} key={name} />
          ))}
        </IconsRow>
        <IconsRow>
          {partnersSecondtRow.map(({ name, iconSrc, url }) => (
            <Iconlink url={url} iconSource={iconSrc} key={name} />
          ))}
        </IconsRow>

        <div className="flex flex-col items-center mt-4 mb-4">
          <p className="text-lg font-semibold text-dark-blue">
            Just kidding...
          </p>
          <p className="text-lg font-normal text-dark-blue">
            There’s room for everyone! Earn more for being early.
          </p>
        </div>

        <Button
          className="px-6 py-3  bg-white text-dark-blue rounded-[32px] drop-shadow-lg"
          label="Partner with Koii"
        />

        <div className="flex flex-col items-center mt-16 mb-16">
          <IconsRow>
            {bottoIconsFirstRow.map(({ name, iconSrc, url }) => (
              <Iconlink url={url} iconSource={iconSrc} key={name} />
            ))}
          </IconsRow>
          <IconsRow>
            {bottoIconsSecondRow.map(({ name, iconSrc, url }) => (
              <Iconlink url={url} iconSource={iconSrc} key={name} />
            ))}
          </IconsRow>
        </div>
      </div>
    </div>
  </div>
);
