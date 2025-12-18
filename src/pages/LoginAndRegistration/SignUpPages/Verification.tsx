import React from "react";
import AppLayout from "../../../layout/userlayout/AppLayout";
import { useNavigate } from "react-router";

const Verification = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <>
        <div className="font-display bg-background-light dark:bg-background-dark text-text-primary dark:text-gray-200">
          <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 lg:p-8 overflow-x-hidden">
            <div className="w-full max-w-4xl">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* <!-- Left Panel: Instructions --> */}
                  <div className="bg-primary/5 dark:bg-primary/10 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="material-symbols-outlined text-primary">
                        health_and_safety
                      </span>
                      <h2 className="text-xl font-bold text-text-primary dark:text-white">
                        Sensa Health
                      </h2>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-2">
                      Almost there!
                    </h3>
                    <p className="text-text-secondary dark:text-gray-300 mb-8">
                      Follow these simple steps to secure your account.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                          <span
                            className="material-symbols-outlined !text-2xl"
                            data-icon="mail"
                          >
                            mail
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary dark:text-white">
                            Step 1: Check Your Inbox
                          </h4>
                          <p className="text-sm text-text-secondary dark:text-gray-400">
                            We've sent a 6-digit code to your email address.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                          <span
                            className="material-symbols-outlined !text-2xl"
                            data-icon="pin"
                          >
                            pin
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary dark:text-white">
                            Step 2: Enter the 6-Digit Code
                          </h4>
                          <p className="text-sm text-text-secondary dark:text-gray-400">
                            Type the code into the fields on the right.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                          <span
                            className="material-symbols-outlined !text-2xl"
                            data-icon="verified_user"
                          >
                            verified_user
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary dark:text-white">
                            Step 3: You're All Set!
                          </h4>
                          <p className="text-sm text-text-secondary dark:text-gray-400">
                            Once verified, you'll get full access to your
                            account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Right Panel: Action --> */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white mb-2">
                      Check your email
                    </h1>
                    <p className="text-text-secondary dark:text-gray-300 mb-8">
                      We've sent a verification code to{" "}
                      <span className="font-medium text-primary">
                        user-email@example.com
                      </span>
                      .
                    </p>
                    <form className="w-full">
                      <label
                        className="text-sm font-medium text-text-secondary dark:text-gray-300 mb-2 block"
                        for="otp-1"
                      >
                        Verification Code
                      </label>
                      <div className="flex justify-start py-3">
                        <fieldset className="relative flex gap-2 sm:gap-3">
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            id="otp-1"
                            max="9"
                            maxlength="1"
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            max="9"
                            maxlength="1"
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            max="9"
                            maxlength="1"
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            max="9"
                            maxlength="1"
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            max="9"
                            maxlength="1"
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                          <input
                            className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors"
                            max="9"
                            maxLength={1}
                            min="0"
                            onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());"
                            onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));"
                            type="number"
                            value=""
                          />
                        </fieldset>
                      </div>
                      <div className="flex pt-6">
                        <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800 transition-colors">
                          <span className="truncate">Verify Account</span>
                        </button>
                      </div>
                    </form>
                    <div className="text-center mt-6">
                      <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal">
                        Didn't receive the code?{" "}
                        <a
                          className="font-bold text-primary hover:underline"
                          href="#"
                        >
                          Resend Code
                        </a>{" "}
                        (60s)
                      </p>
                    </div>
                    <div
                      className="text-center mt-4"
                      onClick={() => navigate("/signup")}
                    >
                      <a
                        className="text-sm text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 hover:underline transition-colors flex items-center justify-center gap-1"
                        href="#"
                      >
                        <span
                          className="material-symbols-outlined !text-base"
                          data-icon="arrow_back"
                        >
                          arrow_back
                        </span>
                        Use a different email address
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppLayout>
  );
};

export default Verification;
