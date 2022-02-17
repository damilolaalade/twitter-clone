import {
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from "../components/Icons";

const CardTweet = (props) => {
  const { imageUrl } = props;
  return (
    <article className="flex px-4 py-3">
      <div>
        <img
          className="w-12 h-12"
          src="https://pbs.twimg.com/profile_images/1446883301793349637/kcf-9Dx0_400x400.jpg"
        />
      </div>
      <section className="px-4 flex-1">
        <div className="flex">
          <h5 className="font-bold mr-2">Dami Alade</h5>
          <span className="text-gray-400">@dev__enthusiast</span>
        </div>
        <p className="mt-1">
          Inevitable move given the market entry of the $3bn funded pan-African
          payment system PAPSS… “The thing with FinTech start-up valuations is
          they now have a nasty habit of correcting post/at IPO, e.g. InsurTech
          valuations have tanked by up to 80%” — M. Adanan
        </p>
        {imageUrl && (
          <img
            src={imageUrl}
            className="rounded-xl mt-4 border border-gray-900"
          />
        )}
        <ul className="flex justify-between text-sm text-gray-400 mt-4 pr-32 ml-4">
          <li>
            <button className="flex text-cyan-500 ml-2">
              <CommentIcon size="sm" />
              <span className="ml-2">2</span>
            </button>
          </li>
          <li>
            <button className="flex text-cyan-500 ml-2">
              <RetweetIcon size="sm" />
              <span className="ml-2">256</span>
            </button>
          </li>
          <li>
            <button className="flex text-cyan-500 ml-2">
              <LikeIcon size="sm" />
              <span className="ml-2">7000</span>
            </button>
          </li>
          <li>
            <button className="flex text-cyan-500 ml-2">
              <ShareIcon size="sm" />
            </button>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default CardTweet;
