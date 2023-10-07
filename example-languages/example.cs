using System.Collections.Generic;
using Game.Systems;
using Game.Constants;
using Game.Data;
using Game.UI;
using Game.Utils;
using ExampleMod.Systems;

namespace ExampleMod.UI {
    public sealed class ExampleOverlayUI : IUIDataProvider {
        private readonly ExampleModSys sys;
        private readonly GameState S;

        private readonly HashSet<string> foo = new();

        public ExampleOverlayUI(ExampleModSys sys) {
            this.sys = sys;
            S = sys.S;
        }

        // This doesn't belong to an entity, so let's return a null
        public Entity Entity => null;
        private UDB header;

        private void DoSomething() {
            sys.SomeVariable++;
            header.NeedsListRebuild = true;
        }

        private void OnButtonClick() {
            UIPopupWidget.Spawn(IconId.CWarning, "some.popup".T(),
                "Popups should be used extremely sparingly, since nobody reads this. Also, if you put the text in like this, it will be impossible to translate, use \"some.text\".T() instead.");
        }

        private void HideOverlay() {
            S.Sig.HideTargetOverlay.Send(sys.Id);
        }

        public string GetName() {
            return sys.Id;
        }

        public UDB GetUIBlock() {
            return null;
        }

        public void GetUIDetails(List<UDB> res) {
            header ??= UDB.Create(this, UDBT.DTextRBHeader, IconId.WList,
                "example.system".T()).AsHeader().WithRBFunction(HideOverlay);
            res.Add(header);

            res.Add(UDB.Create(this, UDBT.IText, IconId.CInfo, "some.info".T())
                .WithIconClickFunction(DoSomething)
                .WithText(Units.XNum(sys.SomeVariable)));

            res.Add(UDB.Create(this, UDBT.ITextBtn, IconId.CInfo, "other.info".T())
                .WithTooltip("tooltips.are.great".T())
                .WithText2(T.Execute)
                .WithClickFunction(OnButtonClick));
        }
    }
}
