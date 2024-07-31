/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722447364", {
    template: `
    <section id="cta-component" class="relative bg-gradient-to-br from-pink-500 via-purple-600 to-black flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white text-shadow">Stay Ahead of the Blockchain Curve</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 text-lg font-medium text-pink-200">Our powerful analytics suite helps you make sense of the latest blockchain data and trends.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Analyze Blockchain Data</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
