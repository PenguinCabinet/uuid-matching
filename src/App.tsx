import { createSignal, lazy, Show, Suspense } from "solid-js";

const MatchedView = lazy(() => import("./MatchedView.tsx"));

type View = "ask" | "matched" | "rejected";

function App() {
  const [view, setView] = createSignal<View>("ask");

  return (
    <main>
      <h1>自認UUID専門マッチングアプリ</h1>
      <Show when={view() === "ask"}>
        <p>あなたの自認はUUIDですか？</p>
        <button type="button" onClick={() => setView("matched")}>
          はい
        </button>
        <button type="button" onClick={() => setView("rejected")}>
          いいえ
        </button>
      </Show>
     <Show when={view() === "matched"}>
        <Suspense fallback={<p>マッチング中…</p>}>
          <MatchedView />
        </Suspense>
        <button type="button" onClick={() => setView("ask")}>
          最初に戻る
        </button>
      </Show>
      <Show when={view() === "rejected"}>
        <p>自認UUIDの方以外は利用することができません。</p>
        <button type="button" onClick={() => setView("ask")}>
          最初に戻る
        </button>
      </Show>
     <hr />
      <footer>
	<p>
	Forked by [imaimai17468/human-matching](https://github.com/imaimai17468/human-matching)      
	</p
        <p>
          inspired by{" "}
          <a href="https://uec-matching.mimifuwacc.workers.dev/" target="_blank" rel="noreferrer">
            https://uec-matching.mimifuwacc.workers.dev/
          </a>
        </p>
        <p>
          <a
            href="https://github.com/PenguinCabinet/uuid-matching"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>© 2026 imaimai17468</p>
      </footer>
    </main>
  );
}

export default App;
