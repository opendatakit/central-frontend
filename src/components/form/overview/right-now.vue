<!--
Copyright 2019 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <page-section id="form-overview-right-now"
    :class="{ 'open-form': form.state === 'open' }" condensed>
    <template #heading>
      <span>{{ $t('common.rightNow') }}</span>
    </template>
    <template #body>
      <form-version-summary-item :version="form">
        <template #body>
          <i18n tag="p" path="version.full">
            <template #publishedVersion>
              <strong>{{ $t('version.publishedVersion') }}</strong>
            </template>
          </i18n>
          <div>
            <form-version-standard-buttons :version="form"
              @view-xml="$emit('view-xml')"/>
          </div>
        </template>
      </form-version-summary-item>
      <summary-item :icon="stateIcon">
        <template #heading>
          {{ $t(`formState.${form.state}`) }}
        </template>
        <template #body>
          {{ $t(`stateCaption.${form.state}`) }}
        </template>
      </summary-item>
      <summary-item :route-to="formPath('submissions')" icon="inbox">
        <template #heading>
          {{ $n(form.submissions, 'default') }}
          <span class="icon-angle-right"></span>
        </template>
        <template #body>
          <i18n tag="p" :path="$tcPath('submissions.full', form.submissions)">
            <template #submissions>
              <strong>{{ $tc('submissions.submissions', form.submissions) }}</strong>
            </template>
          </i18n>
        </template>
      </summary-item>
    </template>
  </page-section>
</template>

<script>
import FormVersionStandardButtons from '../../form-version/standard-buttons.vue';
import FormVersionSummaryItem from '../../form-version/summary-item.vue';
import PageSection from '../../page/section.vue';
import SummaryItem from '../../summary-item.vue';
import routes from '../../../mixins/routes';
import { requestData } from '../../../store/modules/request';

export default {
  name: 'FormOverviewRightNow',
  components: {
    FormVersionStandardButtons,
    FormVersionSummaryItem,
    PageSection,
    SummaryItem
  },
  mixins: [routes()],
  computed: {
    // The component assumes that this data will exist when the component is
    // created.
    ...requestData(['form']),
    stateIcon() {
      switch (this.form.state) {
        case 'open':
          return 'exchange';
        case 'closing':
          return 'clock-o';
        default: // 'closed'
          return 'ban';
      }
    }
  }
};
</script>

<style lang="scss">
#form-overview-right-now {
  // .icon-lock is a little more narrow than .icon-file-o and .icon-inbox, so we
  // use this to center it.
  .icon-lock {
    margin-left: 6px;
    margin-right: 6px;
  }

  &.open-form {
    .icon-file-o, .icon-inbox {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
}
</style>

<i18n lang="json5">
{
  "en": {
    "version": {
      "full": "{publishedVersion} of this Form.",
      "publishedVersion": "Published version"
    },
    "stateCaption": {
      "open": "This Form is downloadable and is accepting Submissions.",
      "closing": "This Form is not downloadable but still accepts Submissions.",
      "closed": "This Form is not downloadable and does not accept Submissions."
    },
    "submissions": {
      // The count of Submissions is shown separately above this text.
      "full": [
        "{submissions} has been saved for this Form.",
        "{submissions} have been saved for this Form."
      ],
      "submissions": "Submission | Submissions"
    }
  }
}
</i18n>

<!-- Autogenerated by destructure.js -->
<i18n>
{
  "cs": {
    "version": {
      "full": "{publishedVersion} tohoto formuláře.",
      "publishedVersion": "Publikovaná verze"
    },
    "stateCaption": {
      "open": "Tento formulář je ke stažení a přijímá příspěvky.",
      "closing": "Tento formulář nelze stáhnout, ale stále přijímá příspěvky.",
      "closed": "Tento formulář nelze stáhnout a nepřijímá příspěvky."
    },
    "submissions": {
      "full": [
        "{submissions} byl pro tento formulář uložen.",
        "{submissions} byly pro tento formulář uloženy.",
        "{submissions} bylo pro tento formulář uloženo.",
        "{submissions} bylo pro tento formulář uloženo."
      ],
      "submissions": "Příspěvek | Příspěvky | Příspěvků | Příspěvků"
    }
  },
  "de": {
    "version": {
      "full": "{publishedVersion} von diesem Formular.",
      "publishedVersion": "Veröffentlichte Version"
    },
    "stateCaption": {
      "open": "Dieses Formular kann heruntergeladen werden und Übermittlungen werden akzeptiert.",
      "closing": "Dieses Formular kann nicht heruntergeladen werden, aber Übermittlungen werden noch akzeptiert.",
      "closed": "Dieses Formular kann nicht heruntergeladen werden und Übermittlungen werden nicht akzeptiert."
    },
    "submissions": {
      "full": [
        "{submissions} wurde für dieses Formular gespeichert.",
        "{submissions} wurden für dieses Formular gespeichert."
      ],
      "submissions": "Übermittlung | Übermittlungen"
    }
  },
  "es": {
    "version": {
      "full": "{publishedVersion} de este formulario.",
      "publishedVersion": "Versión publicada"
    },
    "stateCaption": {
      "open": "Este formulario se puede descargar y acepta envíos.",
      "closing": "Este formulario no se puede descargar perro acepta envíos.",
      "closed": "Este formulario no se puede descargar y no acepta envíos."
    },
    "submissions": {
      "full": [
        "{submissions} ha sido guardada para este formulario",
        "{submissions} han sido guardadas para este formulario."
      ],
      "submissions": "Envío | Envíos"
    }
  },
  "fr": {
    "version": {
      "full": "{publishedVersion} de ce formulaire.",
      "publishedVersion": "Version publiée"
    },
    "stateCaption": {
      "open": "Ce formulaire est téléchargeable et accepte les soumissions.",
      "closing": "Ce formulaire n'est pas téléchargeable mais accepte tout de même les soumissions.",
      "closed": "Ce formulaire n'est pas téléchargeable mais accepte tout de même les soumissions."
    },
    "submissions": {
      "full": [
        "{submissions} a été enregistrées pour ce formulaire.",
        "{submissions} ont été enregistrées pour ce formulaire."
      ],
      "submissions": "Soumission | Soumissions"
    }
  },
  "id": {
    "version": {
      "full": "{publishedVersion} dari formulir ini.",
      "publishedVersion": "Versi terbit"
    },
    "stateCaption": {
      "open": "Formulir ini bisa diunduh dan sedang menerima kiriman data.",
      "closing": "Formulir ini tidak bisa diunduh, tetapi masih menerima kiriman data.",
      "closed": "Formulir ini tidak bisa diunduh dan tidak menerima kiriman data."
    },
    "submissions": {
      "full": [
        "{submissions} untuk formulir ini sudah disimpan."
      ],
      "submissions": "Kiriman data"
    }
  },
  "ja": {
    "version": {
      "full": "フォームの{publishedVersion}",
      "publishedVersion": "公開バージョン"
    },
    "stateCaption": {
      "open": "このフォームはダウンロードでき、フォームの提出も受け付けています。",
      "closing": "このフォームはダウンロードできませんが、フォームの提出は受け付けています。",
      "closed": "このフォームはダウンロードできませんし、フォームの提出も受け付けていません。"
    },
    "submissions": {
      "full": [
        "このフォームへの{submissions}は保存されました。"
      ],
      "submissions": "提出"
    }
  }
}
</i18n>
