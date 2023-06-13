import Link from "next/link";
import Image from "next/image";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {/* {type !== "Edit" && (
        <Image
          src="/assets/images/shake.jpg"
          alt="Guy"
          width={800}
          height={600}
          className="object-cover w-[55rem] h-[41rem] "
        />
      )} */}

      <div className="form-container w-full">
        <form
          onSubmit={handleSubmit}
          className="mt-5 w-full max-w-2xl flex flex-col gap-3 "
        >
          <label>
            <label htmlFor="name" className="text-xs">
              Name:
            </label>
            <input
              id="name"
              value={post.userName}
              onChange={(e) => setPost({ ...post, userName: e.target.value })}
              placeholder=""
              required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="pos" className="text-xs">
              Position:
            </label>
            <input
              id="pos"
              value={post.position}
              onChange={(e) => setPost({ ...post, position: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="em" className="text-xs">
              Email:
            </label>
            <input
              id="em"
              value={post.userEmail}
              onChange={(e) => setPost({ ...post, userEmail: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>
          <label>
            <label htmlFor="exp" className="text-xs">
              Experience:
            </label>
            <input
              id="exp"
              value={post.experience}
              onChange={(e) => setPost({ ...post, experience: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="loc" className="text-xs">
              Location:
            </label>
            <input
              id="loc"
              value={post.location}
              onChange={(e) => setPost({ ...post, location: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="emp" className="text-xs">
              Employment:
            </label>
            <input
              id="emp"
              value={post.employment}
              onChange={(e) => setPost({ ...post, employment: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="dep" className="text-xs">
              Department:
            </label>
            <input
              id="dep"
              value={post.department}
              onChange={(e) => setPost({ ...post, department: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <label>
            <label htmlFor="tel" className="text-xs">
              telephone:
            </label>
            <input
              id="tel"
              value={post.telephone}
              onChange={(e) => setPost({ ...post, telephone: e.target.value })}
              type="text"
              placeholder=""
              // required
              className="form_input border"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm  blue_btn rounded-full text-white"
            >
              {submitting ? `${type}ing...` : type}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
